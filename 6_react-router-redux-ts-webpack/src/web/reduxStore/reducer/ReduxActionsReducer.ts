import { combineReducers } from 'redux';
import { AdvanceReduxActionHandler } from './ReduxActionsHandler';
import { routerReducer as routing } from 'react-router-redux';

//const AllReducer = combineReducers(ReduxActionsHandler())
const AllReducer = combineReducers({...AdvanceReduxActionHandler, ...routing})

export default AllReducer;
