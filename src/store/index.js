import myReducer from '../reducers/index.js'
import { createStore } from 'redux'

export const store = createStore(myReducer);