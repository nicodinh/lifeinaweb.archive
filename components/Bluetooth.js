import React from 'react'
import { useStoreState } from 'easy-peasy'
import { celciusToFahrenheit } from '../lib/celciusToFahrenheit'

let myCharacteristicNotify = null

const connect = async () => {
  const {
    lifeinaboxName,
    lifeinaboxService,
    lifeinaboxCharacteristicNotify,
    lifeinaboxCharacteristic
  } = useStoreState(state => state.device)

  try {
    const device = await navigator.bluetooth.requestDevice({
      filters: [{ name: lifeinaboxName }],
      optionalServices: [lifeinaboxService]
    })
    const server = await device.gatt.connect()
    const deviceConnected = server.connected ? 'yes' : 'no'

    console.log(device.name)
    console.log(device.id)
    console.log(deviceConnected)

    // this.setState({
    //   deviceName: device.name,
    //   deviceID: device.id,
    //   deviceConnected
    // })

    const service = await server.getPrimaryService(lifeinaboxService)

    myCharacteristicNotify = await service.getCharacteristic(
      lifeinaboxCharacteristicNotify
    )
    await myCharacteristicNotify.startNotifications()
    // myCharacteristicNotify.addEventListener(
    //   'characteristicvaluechanged',
    //   this.handleNotifications
    // )

    const commandTMP1H = new Uint8Array([0xaa, 0x8f, 0x01, 0x55])
    const commandBATTERY = new Uint8Array([0xaa, 0x8e, 0xff, 0x55])
    const myCharacteristic = await service.getCharacteristic(
      lifeinaboxCharacteristic
    )
    await myCharacteristic.writeValue(commandTMP1H)
    await myCharacteristic.writeValue(commandBATTERY)
    // this.interval = setInterval(async () => {
    //   await myCharacteristic.writeValue(commandTMP1H)
    //   await myCharacteristic.writeValue(commandBATTERY)
    //   console.log('interval')
    // }, 1000) //600000
  } catch (error) {
    console.log('Argh! ' + error)
  }
  return <div>coucou</div>
}

class Bluetooth extends React.Component {
  constructor (props) {
    super(props)
    this.onButtonClick = this.onButtonClick.bind(this)
    this.handleNotifications = this.handleNotifications.bind(this)
  }

  componentWillUnmount () {
    myCharacteristicNotify.removeEventListener(
      'characteristicvaluechanged',
      this.handleNotifications,
      false
    )
    clearInterval(this.interval)
  }

  state = {
    deviceName: '',
    deviceID: '',
    deviceConnected: false,
    error: '',
    service: '0000fee9-0000-1000-8000-00805f9b34fb',
    characteristicNotify: 'd44bc439-abfd-45a2-b575-925416129601',
    characteristic: 'd44bc439-abfd-45a2-b575-925416129600',
    temperaturePrefix: 'aa8f',
    batteryPrefix: 'aa8e',
    temperatureC: 3,
    temperatureF: 37,
    battery: null,
    isSectorAndBatteryInCharge: false, // button on
    isBatteryDischarge: false, // button on
    isSectorAndBatteryOff: false, // button off
    batteryStatus: null
  }

  handleNotifications (event) {
    let value = event.target.value
    let a = []

    for (let i = 0; i < value.byteLength; i++) {
      a.push(('00' + value.getUint8(i).toString(16)).slice(-2))
    }

    const hexString = a.join('')

    if (hexString.substr(0, 4) === 'aa8f') {
      const hex2dec = parseInt(a[2], 16)
      const celcius = hex2dec / 10

      this.setState({
        temperatureC: celcius,
        temperatureF: celciusToFahrenheit(celcius)
      })
    }

    if (hexString.substr(0, 4) === 'aa8e') {
      const binaryBattery = parseInt(a[2], 16)
        .toString(2)
        .padStart(8, '0')

      if (binaryBattery === '10000000') {
        this.setState(prevState => ({
          isSectorAndBatteryInCharge: false,
          isBatteryDischarge: false,
          isSectorAndBatteryOff: true,
          batteryStatus: 'Plugged in main',
          battery: null
        }))
      }

      if (binaryBattery < '10000000') {
        this.setState({
          isSectorAndBatteryInCharge: false,
          isBatteryDischarge: true,
          isSectorAndBatteryOff: false,
          batteryStatus: 'Discharging',
          battery:
            parseInt(binaryBattery.substr(1), 2) >= 100
              ? 100
              : parseInt(binaryBattery.substr(1), 2)
        })
      }

      if (binaryBattery > '10000000') {
        this.setState({
          isSectorAndBatteryInCharge: true,
          isBatteryDischarge: false,
          isSectorAndBatteryOff: false,
          batteryStatus: 'In Charge',
          battery:
            parseInt(binaryBattery.substr(1), 2) >= 100
              ? 100
              : parseInt(binaryBattery.substr(1), 2)
        })
      }
    }
  }
  async onButtonClick () {
    // connect()
    //   const { lifeinaboxName, lifeinaboxService, lifeinaboxCharacteristicNotify, lifeinaboxCharacteristic } = useStoreState(
    //     state => state.device
    //   )
    //   try {
    //     const device = await navigator.bluetooth.requestDevice({
    //       filters: [{ name: lifeinaboxName }],
    //       optionalServices: [lifeinaboxService]
    //     })
    //     const server = await device.gatt.connect()
    //     const deviceConnected = server.connected ? 'yes' : 'no'
    //     console.log(device.name)
    //     console.log(device.id)
    //     this.setState({
    //       deviceName: device.name,
    //       deviceID: device.id,
    //       deviceConnected
    //     })
    //     const service = await server.getPrimaryService(lifeinaboxService)
    //     myCharacteristicNotify = await service.getCharacteristic(lifeinaboxCharacteristicNotify)
    //     await myCharacteristicNotify.startNotifications()
    //     myCharacteristicNotify.addEventListener(
    //       'characteristicvaluechanged',
    //       this.handleNotifications
    //     )
    //     const commandTMP1H = new Uint8Array([0xaa, 0x8f, 0x01, 0x55])
    //     const commandBATTERY = new Uint8Array([0xaa, 0x8e, 0xff, 0x55])
    //     const myCharacteristic = await service.getCharacteristic(
    //       this.state.characteristic
    //     )
    //     await myCharacteristic.writeValue(commandTMP1H)
    //     await myCharacteristic.writeValue(commandBATTERY)
    //     this.interval = setInterval(async () => {
    //       await myCharacteristic.writeValue(commandTMP1H)
    //       await myCharacteristic.writeValue(commandBATTERY)
    //       console.log('interval')
    //     }, 1000) //600000
    //   } catch (error) {
    //     console.log('Argh! ' + error)
    //     this.setState({
    //       error
    //     })
    //   }
  }

  render () {
    return (
      <div
        style={{
          backgroundColor: 'rgb(54,188,238)',
          height: '100%',
          textAlign: 'center'
        }}
      >
        <br />
        <br />

        <input type='button' onClick={this.onButtonClick} value='SCAN' />

        <br />

        {this.state.deviceConnected ? this.state.temperatureC : null}

        <br />

        {this.state.deviceConnected && !this.state.isSectorAndBatteryOff
          ? Math.round(this.state.battery)
          : this.state.deviceConnected && this.state.isSectorAndBatteryOff
          ? 'Battery is off'
          : null}

        <br />
        <br />

        {this.state.deviceConnected ? this.state.batteryStatus : null}
      </div>
    )
  }
}

export default Bluetooth
