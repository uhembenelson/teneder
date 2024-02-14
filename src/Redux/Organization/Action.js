import { actionTypes } from "./ActionTypes"



// Start User SIGNIN
const loginStart = () => ({
    type: actionTypes.ORGANIZATION_LOGIN_START,
})

const loginSuccess = (data) => ({
    type: actionTypes.ORGANIZATION_LOGIN_SUCCESS,
    payload: data
})

const loginFailed = (data) => ({
    type: actionTypes.ORGANIZATION_LOGIN_FAILED,
    payload: data
})

export const loginOrganization = (userLoginDetails) => async (dispatch) => {
    try {
        dispatch(loginStart());
        let res = await fetch(`https://school-project-production-459d.up.railway.app/v1/auth/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userLoginDetails),
        })
        const data = await res.json();
        console.log(data)

        if (res.status === 200) {
            dispatch(loginSuccess(data));

        }
        // if (res.status === 401) {
        //     dispatch(loginFailed(data));
        // }
        else {
            dispatch(loginFailed(data));
        }

    } catch (err) {
        dispatch(loginFailed("An error occured"));
    }
}


// register

const registerStart = () => ({
    type: actionTypes.ORGANIZATION_REGISTER_START
})

const registerSuccess = (data) => ({
    type: actionTypes.ORGANIZATION_REGISTER_SUCCESS,
    payload: data
})

const registerFailed = (data) => ({
    type: actionTypes.ORGANIZATION_REGISTER_SUCCESS,
    payload: data
})

export const registerOrganization = (userDetails) => async (dispatch) => {
    try {
        dispatch(registerStart());
        let res = await fetch(`https://school-project-production-459d.up.railway.app/v1/auth/signup`, {
            method: "POST",
            headers: {
                // "Content-Type": "application/json",
            },
            body: userDetails
        })
        const data = await res.json();
        console.log(data)

        if (res.status === 201) {
            dispatch(registerSuccess(data));

        }
        // if (res.status === 401) {
        //     dispatch(loginFailed(data));
        // }
        else {
            dispatch(registerFailed(data));
        }

    } catch (err) {
        dispatch(registerFailed("An error occured"));
    }
}

export const selectTender = (data) => ({
    type: actionTypes.ORGANIZATION_TENDER_DETAIL,
    payload: data
})

export const setOrganizationProfilePicture = (data) => ({
    type: actionTypes.ORGANIZATION_PROFILE_PICTURE,
    payload: data
})

export const selectBidder = (data) => ({
    type: actionTypes.ORGANIZATION_SELECT_BIDDER,
    payload: data
})

export const logoutOrganization = () => ({
    type: actionTypes.ORGANIZATION_LOGOUT
})