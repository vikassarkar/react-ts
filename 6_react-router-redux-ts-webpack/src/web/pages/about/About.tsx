import * as React from 'react';
import AddTodo from './component/AddTodo';
import TodoList from './component/TodoList';
import FilterList from './component/FilterList';

export const About = () => {
        return (
        <div className="TodoApp">
            <div className="container pb-3 pt-3 mt-5 mb-5" style={{ border: "1px solid rgba(0, 0, 0, 0.125)" }}>
                <AddTodo />
                <TodoList />
                <FilterList />
            </div>
        </div>
    )
}