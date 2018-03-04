import { ActionTypes } from "./ActionTypes"
let nextTodoId = 0;


export const storeInitiate = (storeInitiate: boolean) => ({
    type: ActionTypes.STORE_INITIATE,
    storeInitiate:storeInitiate
})

export const addTodo = (todoInput: string) => ({
    type: ActionTypes.ADD_TODO,
    id: nextTodoId++,
    todoInput:todoInput
})

export const setFilter = (filterType: string) => ({
    type: ActionTypes.SET_FILTER,
    filterType:filterType
})

// export const toggleTodo = (id: any) => ({
//     type: ActionTypes.TOGGLE_TODO,
//     id
// })
