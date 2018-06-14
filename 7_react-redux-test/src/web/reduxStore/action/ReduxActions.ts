import { createAction } from "redux-actions";
import { ActionTypes } from "./ActionTypes"

export const storeCreated = createAction<void>(ActionTypes.storeCreated) as () => ReduxActions.Action<void>;
export const userPageLoaded = createAction<void>(ActionTypes.userPageLoaded) as () => ReduxActions.Action<void>;
export const lightboxTrigger = createAction<any>(ActionTypes.lightboxTrigger) as (data: any) => ReduxActions.Action<any>;
export const setUserData = createAction<any>(ActionTypes.setUserData) as (data: any) => ReduxActions.Action<any>;
export const setLightBoxData = createAction<any>(ActionTypes.setLightBoxData) as (data: any) => ReduxActions.Action<any>;