import { ActionTypes } from "./ActionTypes"
let nextTodoId = 0;


export const storeInitiate = (storeInitiate: boolean) => ({
    type: ActionTypes.storeInitiate,
    storeInitiate:storeInitiate
})

export const addTodo = (todoInput: string) => ({
    type: ActionTypes.addTodo,
    id: nextTodoId++,
    todoInput:todoInput
})

export const setFilter = (filterType: string) => ({
    type: ActionTypes.setFilter,
    filterType:filterType
})

// export const toggleTodo = (id: any) => ({
//     type: ActionTypes.TOGGLE_TODO,
//     id
// })
