import { action } from 'easy-peasy'

const settingsModel = {
  pollInterval: 1000, // ms
  language: 'en_GB',
  languages: ['en_GB', 'fr_FR'],
  updateLanguage: action((state, payload) => {
    state.language = payload
  }),
  unit: 'C',
  units: ['C', 'F'],
  updateUnit: action((state, payload) => {
    state.unit = payload
  })
}

export default settingsModel
