import { combineReducers } from 'redux'
import { usersArray } from '../../entries'

export default combineReducers({
  usersArray: usersArray.reducer,
})
