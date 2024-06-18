import { bidderActionTypes } from "./ActionTypes";

export const loginUser = (data) => ({
    type: bidderActionTypes.USER_INFO,
    payload: data
})

export const getTenderInfo = (data) => ({
    type: bidderActionTypes.TENDER_DETAILS,
    payload: data
})

export const logoutBidder = () => ({
    type: bidderActionTypes.BIDDER_LOGOUT
})

export const selectTenderBidder = (data) => ({
    type: bidderActionTypes.SELECT_TENDER,
    payload: data
})