import { combineReducers } from 'redux'
//import {ReduxActionsHandler} from './ReduxActionsHandler'
import { AdvanceReduxActionHandler } from './ReduxActionsHandler'

//const AllReducer = combineReducers(ReduxActionsHandler())
const AllReducer = combineReducers(AdvanceReduxActionHandler())

export default AllReducer;
