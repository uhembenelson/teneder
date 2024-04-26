import { actionTypes } from "./ActionTypes"

const initialState = {
    isLoggedIn: false,
    isRegistered: false,
    user: {},
    isLoading: false,
    errorMsg: '',
    selectedTender: {},
    selectedBidder: {},
    selectNewBidder: {},
    organizationProfilePicture: []

}

const organizationReducer = (state = initialState, action) => {
    switch (action.type) {
        // Login
        case actionTypes.USER_INFO:
            return {
                ...state, user: action.payload, isLoggedIn: true
            }

        case actionTypes.ORGANIZATION_TENDER_DETAIL:
            return {
                ...state, selectedTender: action.payload
            }
        case actionTypes.ORGANIZATION_SELECT_BIDDER:
            return {
                ...state, selectedBidder: action.payload
            }
        case actionTypes.ORGANIZATION_PROFILE_PICTURE:
            return {
                ...state, organizationProfilePicture: action.payload
            }
        case actionTypes.ORGANIZATION_SELECT_NEW_BIDDER:
            return {
                ...state, selectNewBidder: action.payload
            }

        case actionTypes.ORGANIZATION_LOGOUT:
            return initialState
        default:
            return state
    }

}

export default organizationReducer