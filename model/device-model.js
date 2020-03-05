import { action } from 'easy-peasy'

const deviceModel = {
  lifeinaboxName: 'LifeinaBox',
  lifeinaboxService: '0000fee9-0000-1000-8000-00805f9b34fb',
  lifeinaboxCharacteristicNotify: 'd44bc439-abfd-45a2-b575-925416129601',
  lifeinaboxCharacteristic: 'd44bc439-abfd-45a2-b575-925416129600',
  deviceID: '',
  isConnected: false,
  reset: action(state => {
    ;(state.deviceID = ''), (state.isConnected = false)
  }),
  updateDeviceID: action((state, payload) => {
    state.deviceID = payload
  }),
  updateIsConnected: action((state, payload) => {
    state.isConnected = payload
  })
}

export default deviceModel
