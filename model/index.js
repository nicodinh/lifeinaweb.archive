import temperatureModel from './temperature-model'
import batteryModel from './battery-model'
import settingsModel from './settings-model'
import deviceModel from './device-model'

const storeModel = {
  temperature: temperatureModel,
  battery: batteryModel,
  settings: settingsModel,
  device: deviceModel
  // devices: [
  //   {1: {temperature: temperatureModel}},
  //   {2: {temperature: temperatureModel}},
  //   {3: {temperature: temperatureModel}},
  //   {4: {temperature: temperatureModel}},
  //   {5: {temperature: temperatureModel}},
  //   {6: {temperature: temperatureModel}},
  //   {7: {temperature: temperatureModel}},
  //   {8: {temperature: temperatureModel}},
  // ]
}

export default storeModel
