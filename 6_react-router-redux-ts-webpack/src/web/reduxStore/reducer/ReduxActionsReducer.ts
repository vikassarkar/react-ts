import { combineReducers } from 'redux';
import { AdvanceReduxActionHandler } from './ReduxActionsHandler';

//const AllReducer = combineReducers(ReduxActionsHandler())
const AllReducer = combineReducers({...AdvanceReduxActionHandler})

export default AllReducer;
