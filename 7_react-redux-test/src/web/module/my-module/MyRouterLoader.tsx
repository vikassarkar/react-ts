import "../../../assets/scss/my-module.scss"

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Store } from "../../reduxStore/store/Store";
import Subscriber from "../../reduxStore/store/Subscriber";
import MyRouter from './MyRouter';

Store.subscribe(Subscriber(Store));

console.log(Store.getState());

ReactDOM.render(
    <Provider store={Store}>
        <MyRouter />
    </Provider>,
    document.getElementById('app')
);