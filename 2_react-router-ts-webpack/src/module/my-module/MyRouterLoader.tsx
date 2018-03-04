import "../../assets/scss/module_1.scss"

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {MyRouter} from './MyRouter';
//import { Home } from '../../pages/home/Home';

ReactDOM.render(
    <MyRouter />,
    document.getElementById('app')
);