/// <reference types="web-bluetooth" />

import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { lastBatteryBuffer, lastTemperatureBuffer } from '../lib/'

let device = null
let myCharacteristicNotify = null
let interval = null

const FindButton = () => {
  // Device Model
  const {
    lifeinaboxName,
    lifeinaboxService,
    lifeinaboxCharacteristicNotify,
    lifeinaboxCharacteristic,
    isConnected
  } = useStoreState(state => state.device)

  const { updateDeviceID, updateIsConnected } = useStoreActions(
    actions => actions.device
  )
  const resetDevice = useStoreActions(actions => actions.device.reset)

  // Temperature Model
  const { prepareValue } = useStoreActions(actions => actions.temperature)
  const resetTemperature = useStoreActions(actions => actions.temperature.reset)
  // Battery Model
  const addBatteryValue = useStoreActions(actions => actions.battery.addValue)
  const updateBatteryStatus = useStoreActions(
    actions => actions.battery.updateStatus
  )
  const resetBattery = useStoreActions(actions => actions.battery.reset)

  // Settings Model
  const { pollInterval, unit } = useStoreState(state => state.settings)

  const handleNotifications = event => {
    let value = event.target.value
    let a = []

    for (let i = 0; i < value.byteLength; i++) {
      a.push(('00' + value.getUint8(i).toString(16)).slice(-2))
    }

    const hexString = a.join('')

    if (hexString.substr(0, 4) === 'aa8f') {
      const hex2dec = parseInt(a[2], 16)
      const celcius = hex2dec / 10

      prepareValue(celcius)
    }

    if (hexString.substr(0, 4) === 'aa8e') {
      const binaryBattery = parseInt(a[2], 16)
        .toString(2)
        .padStart(8, '0')

      if (binaryBattery === '10000000') {
        updateBatteryStatus('Plugged in main')
      }

      if (binaryBattery < '10000000') {
        updateBatteryStatus('Discharging')
        addBatteryValue(
          parseInt(binaryBattery.substr(1), 2) >= 100
            ? 100
            : parseInt(binaryBattery.substr(1), 2)
        )
      }

      if (binaryBattery > '10000000') {
        updateBatteryStatus('In Charge')
        addBatteryValue(
          parseInt(binaryBattery.substr(1), 2) >= 100
            ? 100
            : parseInt(binaryBattery.substr(1), 2)
        )
      }
    }
  }

  const onClickDiscoverButton = async e => {
    e.preventDefault()

    try {
      device = await navigator.bluetooth.requestDevice({
        filters: [{ name: lifeinaboxName }],
        optionalServices: [lifeinaboxService]
      })
      const server = await device.gatt.connect()

      updateDeviceID(device.id)
      updateIsConnected(server.connected)

      const service = await server.getPrimaryService(lifeinaboxService)
      myCharacteristicNotify = await service.getCharacteristic(
        lifeinaboxCharacteristicNotify
      )
      await myCharacteristicNotify.startNotifications()
      myCharacteristicNotify.addEventListener(
        'characteristicvaluechanged',
        handleNotifications
      )

      const myCharacteristic = await service.getCharacteristic(
        lifeinaboxCharacteristic
      )

      interval = setInterval(async () => {
        await myCharacteristic.writeValue(lastTemperatureBuffer)
        await myCharacteristic.writeValue(lastBatteryBuffer)
      }, pollInterval)
    } catch (error) {
      console.error(error)
    }
  }

  const onClickDisconnectButton = () => {
    // remove listeners
    if (myCharacteristicNotify && interval && device) {
      myCharacteristicNotify.removeEventListener(
        'characteristicvaluechanged',
        handleNotifications,
        false
      )
      clearInterval(interval)

      // and clean them
      myCharacteristicNotify = null
      interval = null

      // disconnecting from Bluetooth Device
      if (device.gatt.connected) {
        device.gatt.disconnect()
      }

      // and reset redux
      resetDevice()
      resetBattery()
      resetTemperature()
    }
  }

  return (
    <>
      <button
        onClick={!isConnected ? onClickDiscoverButton : onClickDisconnectButton}
        className='border rounded hover:border-transparent hover:text-blue-400 hover:bg-white text-white py-2 px-4 rounded inline-flex items-center'
      >
        <svg
          className='fill-current w-4 h-4 mr-2'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
        >
          <path d='M9.41 0l6 6-4 4 4 4-6 6H9v-7.59l-3.3 3.3-1.4-1.42L8.58 10l-4.3-4.3L5.7 4.3 9 7.58V0h.41zM11 4.41V7.6L12.59 6 11 4.41zM12.59 14L11 12.41v3.18L12.59 14z' />
        </svg>
        <span>
          {!isConnected ? 'Find my LifeinaBox' : 'Found. Click to disconnect'}
        </span>
      </button>
    </>
  )
}

export { FindButton }
