import {createStore } from "redux";
import { devToolsEnhancer  } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';

import AllReducer from  "../reducer/ReduxActionsReducer";

// Create a history of your choosing (we're using a browser history in this case)
export const history = createBrowserHistory()

//developement tool enhancer
export const enhancer = devToolsEnhancer({});

//create store and Also apply our middleware for navigating
export const Store = createStore(AllReducer,  enhancer);