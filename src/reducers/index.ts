import { combineReducers } from 'redux'
import todos from './todos'
import notification from './notification'
import auth from './auth'

export default combineReducers({
  todos,
  notification,
  auth,
})
