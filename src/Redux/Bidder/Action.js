import { bidderActionTypes } from "./ActionTypes";

export const loginUser = (data) => ({
    type: bidderActionTypes.USER_INFO,
    payload: data
})

export const getTenderInfo = (data) => ({
    type: bidderActionTypes.TENDER_DETAILS,
    payload: data
})