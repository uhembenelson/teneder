import { bidderActionTypes } from "./ActionTypes"

const initialState = {
    user: {},
    isLoggedIn: false,
    tenderInfo: {}

}

const bidderReducer = (state = initialState, action) => {
    switch (action.type) {
        case bidderActionTypes.USER_INFO:
            return {
                ...state, user: action.payload, isLoggedIn: true
            }
        case bidderActionTypes.TENDER_DETAILS:
            return {
                ...state, tenderInfo: action.payload
            }

        // case actionTypes.ORGANIZATION_LOGOUT:
        //     return initialState
        case bidderActionTypes.BIDDER_LOGOUT:
            return initialState
        default:
            return state
    }

}

export default bidderReducer