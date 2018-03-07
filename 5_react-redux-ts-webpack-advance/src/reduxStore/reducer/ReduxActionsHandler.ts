import { handleActions, Action } from "redux-actions";
import { ActionTypes } from "../action/ActionTypes";

// export const ReduxActionsHandler = () => {
//     return {
//         TodoReducer: handleActions({
//             "STORE_INITIATE": (state: any, { payload: data }: Action<any>) => {
//                 return { previousState: { ...state }, type: ActionTypes.storeInitiate, payload: { storeInitiate: data } }
//             },

//             "ADD_TODO": (state: any, action: any) => {
//                 return { previousState: { ...state }, type: action.type, payload: { id: action.id, todoInput: action.todoInput, completed: false } }
//             }
//         }, { status: 0 }),
//         FilterReducer: handleActions<any>({
//             "SET_FILTER": (state: any, { payload: data }: Action<any>) => {
//                 return { previousState: { ...state }, type: ActionTypes.setFilter, payload: { filterType: data } }
//             }
//         }, { status: 0 })
//     }
// };


/**The other way */
import * as actions from "../action/ReduxActions";
export function actionsToComputedPropertyName<T>(actions: T): {[key in keyof T]: string} {
    return Object.keys(actions).reduce((symbols, key: keyof T) => ({ ...symbols, [key]: (actions[key] as any).toString() }), {} as any);
}
const { storeInitiate, addTodo, setFilter } = actionsToComputedPropertyName(actions);

export const AdvanceReduxActionHandler = () => {
    return {
        TodoReducer: handleActions<any>({
            [storeInitiate]: (state, { payload: data }: Action<any>) => {
                return { ...state, type: ActionTypes.storeInitiate, payload: { storeInitiate: data } };
            },
            [addTodo]: (state, { payload: data }: Action<any>) => {
                return { ...state, type: ActionTypes.addTodo, payload: { todoInput: data, completed: false } };
            }
        }, { status: 0 }),
        FilterReducer: handleActions<any>({
            [setFilter]: (state, { payload: data }: Action<any>) => {
                return { ...state, type: ActionTypes.setFilter, payload: { filterType: data } };
            }
        }, { status: 1 })
    }
}