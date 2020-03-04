import React from 'react'
import '../styles/index.css'
import { VictoryChart, VictoryLine, VictoryTheme, VictoryLegend } from 'victory'
import { useStoreState, useStoreActions, action } from 'easy-peasy'
// import Bluetooth from '../components/Bluetooth'
import { BatteryChart } from '../components/BatteryChart'
import { TemperatureChart } from '../components/temperatureChart'
import { LifeinaBoxStats } from '../components/LifeinaBoxStats'
import { lastBatteryBuffer } from '../lib/lastBatteryBuffer'
import { lastTemperatureBuffer } from '../lib/lastTemperatureBuffer'

export default () => {
  const {
    lifeinaboxName,
    lifeinaboxService,
    lifeinaboxCharacteristicNotify,
    lifeinaboxCharacteristic
  } = useStoreState(state => state.device)

  const { updateDeviceID, updateIsConnected } = useStoreActions(
    actions => actions.device
  )

  let myCharacteristicNotify = null
  let interval = null

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

      console.log(celcius)

      // this.setState({
      //   temperatureC: celcius,
      //   temperatureF: celciusToFahrenheit(celcius)
      // })
    }

    // if (hexString.substr(0, 4) === 'aa8e') {
    //   const binaryBattery = parseInt(a[2], 16)
    //     .toString(2)
    //     .padStart(8, '0')

    //   if (binaryBattery === '10000000') {
    //     this.setState(prevState => ({
    //       isSectorAndBatteryInCharge: false,
    //       isBatteryDischarge: false,
    //       isSectorAndBatteryOff: true,
    //       batteryStatus: 'Plugged in main',
    //       battery: null
    //     }))
    //   }

    // if (binaryBattery < '10000000') {
    //   this.setState({
    //     isSectorAndBatteryInCharge: false,
    //     isBatteryDischarge: true,
    //     isSectorAndBatteryOff: false,
    //     batteryStatus: 'Discharging',
    //     battery:
    //       parseInt(binaryBattery.substr(1), 2) >= 100
    //         ? 100
    //         : parseInt(binaryBattery.substr(1), 2)
    //   })
    // }

    // if (binaryBattery > '10000000') {
    //   this.setState({
    //     isSectorAndBatteryInCharge: true,
    //     isBatteryDischarge: false,
    //     isSectorAndBatteryOff: false,
    //     batteryStatus: 'In Charge',
    //     battery:
    //       parseInt(binaryBattery.substr(1), 2) >= 100
    //         ? 100
    //         : parseInt(binaryBattery.substr(1), 2)
    //   })
    // }
    // }
  }

  const onClickDiscoverButton = async e => {
    e.preventDefault()

    try {
      const device = await navigator.bluetooth.requestDevice({
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

      console.log(myCharacteristicNotify)

      await myCharacteristicNotify.startNotifications()

      myCharacteristicNotify.addEventListener(
        'characteristicvaluechanged',
        handleNotifications
      )

      const myCharacteristic = await service.getCharacteristic(
        lifeinaboxCharacteristic
      )

      // initial values
      await myCharacteristic.writeValue(lastTemperatureBuffer)
      await myCharacteristic.writeValue(lastBatteryBuffer)

      interval = setInterval(async () => {
        await myCharacteristic.writeValue(lastTemperatureBuffer)
        await myCharacteristic.writeValue(lastBatteryBuffer)
        console.log('interval')
      }, 1000) //600000
    } catch (error) {
      console.error(error)
    }
  }

  const onClickDisconnectButton = e => {
    e.preventDefault()

    myCharacteristicNotify.removeEventListener(
      'characteristicvaluechanged',
      handleNotifications,
      false
    )
    clearInterval(interval)
  }

  return (
    <>
      <nav
        className='flex items-center justify-between flex-wrap p-6 rounded-lg mb-4'
        style={{ backgroundColor: '#15bef0' }}
      >
        <div className='flex items-center flex-shrink-0 text-white mr-4'>
          <img src='/logo.svg' style={{ height: 80 }} />
        </div>

        <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
          <div className='text-xl lg:flex-grow font-semibold'>
            <a
              href='/'
              className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-teal-100 mr-4'
            >
              Dashboard
            </a>
            <a
              href='/settings'
              className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4'
            >
              Settings
            </a>
            <a
              href='/faq'
              className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4'
            >
              FAQ
            </a>
            <a
              href='/chat-with-us'
              className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4'
            >
              Chat with us
            </a>
          </div>
          <div>
            <a
              onClick={onClickDiscoverButton}
              href='#'
              className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'
            >
              Find my LifeinaBox
            </a>
          </div>
        </div>
      </nav>

      <div
        className='flex flex-wrap -mx-2 shadow rounded'
        style={{ backgroundColor: '#fefaf0' }}
      >
        <div className='w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-2 mb-4'>
          <div className='h-auto p-4 /*shadow rounded bg-white*/ text-center'>
            {/* content1 */}
            <LifeinaBoxStats />
            {/* content1 */}
          </div>
        </div>
        <div className='w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-2 mb-4'>
          <div className='h-auto p-4 /*shadow rounded bg-white*/ text-center'>
            {/* content2 */}
            <TemperatureChart />
            {/* content2 */}
          </div>
        </div>
        <div className='w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-2 mb-4'>
          <div className='h-auto p-4 /*shadow rounded bg-white*/ text-center'>
            {/* content3 */}
            <BatteryChart />
            {/* content3 */}
          </div>
        </div>
      </div>
      {/* <Bluetooth /> */}
    </>
  )
}
