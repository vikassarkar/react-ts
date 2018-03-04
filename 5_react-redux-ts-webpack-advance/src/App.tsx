import "./assets/scss/module1.scss"

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Store from "./reduxStore/store/Store"
import Subscriber from "./reduxStore/store/Subscriber"
import AddTodo from './component/AddTodo';
import TodoList from './component/TodoList';
import FilterList from './component/FilterList';
import {storeInitiate} from "./reduxStore/action/Actions";

Store.subscribe(Subscriber(Store));
console.log(Store.getState());
Store.dispatch(storeInitiate(true));

ReactDOM.render(
    <div className="TodoApp">
        <div className="container pb-3 pt-3 mt-5 mb-5" style={{ border: "1px solid rgba(0, 0, 0, 0.125)" }}>
            <AddTodo />
            <TodoList />
            <FilterList />
        </div>
    </div>,
    document.getElementById('app')
);