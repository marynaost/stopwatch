import { createStore } from 'redux'
import { combineReducers } from 'redux'
import timeReducer from './timereducer'

const rootReducer = combineReducers({
  time: timeReducer,
})
const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, enhancer)
export default store
