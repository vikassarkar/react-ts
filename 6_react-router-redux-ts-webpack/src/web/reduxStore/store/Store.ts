import {createStore} from "redux";
//import AllReducer from  "../reducer/Reducer";
import AllReducer from  "../reducer/ReduxActionsReducer";

//const Store = createStore(AllReducer, {"TodoReducer":{status:"started"}, "FilterReducer":{status:"started"}});//second param is initial default state value
const Store = createStore(AllReducer);

export default Store;