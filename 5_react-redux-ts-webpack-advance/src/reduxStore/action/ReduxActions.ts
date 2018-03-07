import { createAction } from "redux-actions";
import { ActionTypes } from "./ActionTypes"

// export const setInitializing = createAction("SET_INITIALIZING", null);
// export const storeInitiate = createAction(ActionTypes.STORE_INITIATE, (storeInitiate: boolean) => storeInitiate);
// export const addTodo = createAction(ActionTypes.ADD_TODO, (todoInput: string) => todoInput);
// export const setFilter = createAction(ActionTypes.SET_FILTER, (filterType: string) => filterType);

/**The other way */
export const setInitializing = createAction<void>("SET_INITIALIZING") as () => ReduxActions.Action<void>;
export const storeInitiate = createAction<any>(ActionTypes.STORE_INITIATE) as (data: any) => ReduxActions.Action<any>;
export const addTodo = createAction<any>(ActionTypes.ADD_TODO) as (data: any) => ReduxActions.Action<any>;
export const setFilter = createAction<any>(ActionTypes.SET_FILTER) as (data: any) => ReduxActions.Action<any>;