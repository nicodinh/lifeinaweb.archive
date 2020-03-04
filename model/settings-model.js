import { action } from 'easy-peasy'

const settingsModel = {
  language: 'en_GB',
  pollInterval: 1000, // ms
  unit: 'C' // accepted values: 'C' or 'F'
}

export default settingsModel
