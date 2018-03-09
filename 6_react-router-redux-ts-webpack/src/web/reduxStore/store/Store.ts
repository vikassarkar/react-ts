import {createStore } from "redux";
import { createBrowserHistory } from 'history';

import AllReducer from  "../reducer/ReduxActionsReducer";

// Create a history of your choosing (we're using a browser history in this case)
export const history = createBrowserHistory()


//create store and Also apply our middleware for navigating
export const Store = createStore(AllReducer);