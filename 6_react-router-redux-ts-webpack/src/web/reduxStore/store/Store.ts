import {createStore, applyMiddleware } from "redux";
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';

import AllReducer from  "../reducer/ReduxActionsReducer";

// Create a history of your choosing (we're using a browser history in this case)
export const history = createBrowserHistory()

// Build the middleware for intercepting and dispatching navigation actions
export const middleware = routerMiddleware(history)

//create store and Also apply our middleware for navigating
export const Store = createStore(AllReducer, applyMiddleware(middleware));