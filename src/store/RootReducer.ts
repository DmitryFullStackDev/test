import { combineReducers } from 'redux'
import commonReducer from './common/slices'

export default combineReducers({
  common: commonReducer,
})
