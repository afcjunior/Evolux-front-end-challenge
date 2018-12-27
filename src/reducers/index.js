import { combineReducers } from 'redux'
import numbers from './numbers'
import meta from './meta'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  numbers,
  meta,
  loadingBar: loadingBarReducer  //from react-redux-loading

})