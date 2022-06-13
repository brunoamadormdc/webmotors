import { combineReducers } from 'redux'
import FilterReducer from './filters'
import UxReducer from './ux'


export default combineReducers({
  filter:FilterReducer,
  ux:UxReducer
})