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
      { x: -1, y: nth(state.values, -2) },
      { x: -2, y: nth(state.values, -3) },
      { x: -3, y: nth(state.values, -4) },
      { x: -4, y: nth(state.values, -5) },
      { x: -5, y: nth(state.values, -6) },
      { x: -6, y: nth(state.values, -7) },
      { x: -7, y: nth(state.values, -8) },
      { x: -8, y: nth(state.values, -9) },
      { x: -9, y: nth(state.values, -10) },
      { x: -10, y: nth(state.values, -11) }
    ]
  })
}

export default temperatureModel
