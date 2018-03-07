import { combineReducers } from 'redux'
import TodoReducer from './_TodoReducer'
import FilterReducer from './_FilterReducer'

const AllReducer = combineReducers({
    TodoReducer,
    FilterReducer
})

export default AllReducer;
