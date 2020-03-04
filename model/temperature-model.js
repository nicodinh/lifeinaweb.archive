import { action, computed } from 'easy-peasy'
import { nth } from 'lodash'

const temperatureModel = {
  values: [],
  addValue: action((state, payload) => {
    state.values.push(payload)
  }),
  value: computed(state => nth(state.values, -1)),
  chartValues: computed(state => {
    return [
      { x: 0, y: nth(state.values, -1) },
      { x: -1, y: nth(state.values, -2) || 0 },
      { x: -2, y: nth(state.values, -3) || 0 },
      { x: -3, y: nth(state.values, -4) || 0 },
      { x: -4, y: nth(state.values, -5) || 0 },
      { x: -5, y: nth(state.values, -6) || 0 },
      { x: -6, y: nth(state.values, -7) || 0 },
      { x: -7, y: nth(state.values, -8) || 0 },
      { x: -8, y: nth(state.values, -9) || 0 },
      { x: -9, y: nth(state.values, -10) || 0 },
      { x: -10, y: nth(state.values, -11) || 0 }
    ]
  })
}

export default temperatureModel
