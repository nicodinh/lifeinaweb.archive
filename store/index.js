import { createStore } from 'easy-peasy' // 👈 import
import storeModel from '../model'

export function initializeStore (initialState) {
  return createStore(storeModel, initialState)
}
