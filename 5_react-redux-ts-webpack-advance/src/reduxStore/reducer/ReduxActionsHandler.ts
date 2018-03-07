import { handleActions, Action } from "redux-actions";
//import { ActionTypes } from "../action/ActionTypes";

// export const ReduxActionsHandler = () => {
//     return {
//         TodoReducer: handleActions({
//             "STORE_INITIATE": (state: any, { payload: data }: Action<any>) => {
//                 return { previousState: { ...state }, type: ActionTypes.STORE_INITIATE, payload: { storeInitiate: data } }
//             },

//             "ADD_TODO": (state: any, action: any) => {
//                 return { previousState: { ...state }, type: action.type, payload: { id: action.id, todoInput: action.todoInput, completed: false } }
//             }
//         }, { status: 0 }),
//         FilterReducer: handleActions<any>({
//             "SET_FILTER": (state: any, { payload: data }: Action<any>) => {
//                 return { previousState: { ...state }, type: ActionTypes.SET_FILTER, payload: { filterType: data } }
//             }
//         }, { status: 0 })
//     }
// };


/**The other way */
export const AdvanceReduxActionHandler = () => {
    return {
        TodoReducer: handleActions<any>({
            ["STORE_INITIATE"]: (state, { payload: data }: Action<any>) => {
                return { ...state, payload: { storeInitiate: data } };
            },
            ["ADD_TODO"]: (state, { payload: data }: Action<any>) => {
                return { ...state, payload: { todoInput: data, completed: false } };
            }
        }, { status: 0 }),
        FilterReducer: handleActions<any>({
            ["SET_FILTER"]: (state, { payload: data }: Action<any>) => {
                return { ...state, payload: { filterType: data } };
            }
        }, { status: 1 })
    }
}