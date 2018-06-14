import { handleActions, Action } from "redux-actions";
import { ActionTypes } from "../action/ActionTypes";
import * as actions from "../action/ReduxActions";

export function actionsToComputedPropertyName<T>(actions: T): {[key in keyof T]: string} {
    return Object.keys(actions).reduce((symbols, key: keyof T) => ({ ...symbols, [key]: (actions[key] as any).toString() }), {} as any);
}
const { storeCreated, userPageLoaded, lightboxTrigger, setUserData, setLightBoxData } = actionsToComputedPropertyName(actions);


export const AdvanceReduxActionHandler = {
    userDataReducer: handleActions<any>({
        [storeCreated]: (state) => {
            return { ...state, [storeCreated]: { type: ActionTypes.storeCreated, status: 1 } };
        },
        [userPageLoaded]: (state) => {
            return { ...state, [userPageLoaded]: { type: ActionTypes.userPageLoaded, status: 1 } };
        },
        [lightboxTrigger]: (state, { payload: data }: Action<any>) => {
            return { ...state, [lightboxTrigger]: { type: ActionTypes.lightboxTrigger, payload: data } };
        },
        [setLightBoxData]: (state, { payload: data }: Action<any>) => {
            return { ...state, [setLightBoxData]: { type: ActionTypes.setLightBoxData, payload: data } };
        }
    }, { reducer: "userData" }),
    allUserDataReducer: handleActions<any>({
        [setUserData]: (state, { payload: data }: Action<any>) => {
            return { ...state, [setUserData]: { type: ActionTypes.setUserData, payload: data } };
        }
    }, { reducer: "allUserData" })
}