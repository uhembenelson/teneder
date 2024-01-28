import { ActionTypes } from "./ActionTypes";

export const login = () => ({
    type: ActionTypes.STUDENT_LOGIN
})

export const create_new_user = (user) => ({
    type: ActionTypes.CREATE_NEW_USER,
    payload: user
})

export const logout = () => ({
    type: ActionTypes.LOGOUT
})

export const lecturerLogin = () => ({
    type: ActionTypes.LECTURER_LOGIN
})

export const create_new_lecturer = (user) => ({
    type: ActionTypes.CREATE_NEW_LECTURER,
    payload: user
})

export const notification = (notificationMessage) => ({
    type: ActionTypes.NOTIFICATION,
    payload: notificationMessage
})

// Start User Registration
const registerStart = () => ({
    type: ActionTypes.REGISTER_START
})

const registerSuccess = (data) => ({
    type: ActionTypes.REGISTER_SUCCESS,
    payload: data
})

const registerFailed = (data) => ({
    type: ActionTypes.REGISTER_FAILED,
    payload: data
})

export const registerStudent = (userRegisterDetails) => async (dispatch) => {
    try {
        dispatch(registerStart());
        let res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userRegisterDetails),
        })
        const data = await res.json();
        console.log(data)
        if (res.status === 200) {
            dispatch(registerSuccess(data));

        }
        else {
            dispatch(registerFailed('An error occured'));
        }

    } catch (err) {
        dispatch(registerFailed("An error occured"));
    }
}


// Start User SIGNIN
const loginStart = () => ({
    type: ActionTypes.LOGIN_START
})

const loginSuccess = (data) => ({
    type: ActionTypes.LOGIN_SUCCESS,
    payload: data
})

const loginFailed = (data) => ({
    type: ActionTypes.LOGIN_FAILED,
    payload: data
})

export const loginStudent = (userLoginDetails) => async (dispatch) => {
    try {
        dispatch(loginStart());
        let res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
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
        else {
            dispatch(loginFailed('An error occured'));
        }

    } catch (err) {
        dispatch(loginFailed("An error occured"));
    }
}




// Start User Post Details
const postDetailsStart = () => ({
    type: ActionTypes.POST_STUDENT_DETAILS_START
})

const postDetailsSuccess = (data) => ({
    type: ActionTypes.POST_STUDENT_DETAILS_SUCCESS,
    payload: data
})

const postDetailsFailed = (data) => ({
    type: ActionTypes.POST_STUDENT_DETAILS_FAILED,
    payload: data
})

export const postStudentDetails = (userDetails) => async (dispatch) => {
    try {
        dispatch(postDetailsStart());
        let res = await fetch(`https://e-portal-fc6d8-default-rtdb.firebaseio.com/students.json`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userDetails),
        })
        const data = await res.json();
        console.log(data)
        if (res.status === 200) {
            dispatch(postDetailsSuccess(data.name));

        }
        else {
            dispatch(postDetailsFailed('An error occured'));
        }

    } catch (err) {
        dispatch(postDetailsFailed("An error occured"));
    }
}


// Start User Get Details
const getDetailsStart = () => ({
    type: ActionTypes.GET_STUDENT_DETAILS_START
})

const getDetailsSuccess = (data) => ({
    type: ActionTypes.GET_STUDENT_DETAILS_SUCCESS,
    payload: data
})

const getDetailsFailed = (data) => ({
    type: ActionTypes.GET_STUDENT_DETAILS_FAILED,
    payload: data
})

export const getStudentDetails = (userId) => async (dispatch) => {
    try {
        dispatch(getDetailsStart());
        let res = await fetch(`https://e-portal-fc6d8-default-rtdb.firebaseio.com/students/${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // Authorization: ` ${API_KEY}`
            }
        })
        const data = await res.json();
        console.log(data)
        if (res.status === 200) {
            // dispatch(getDetailsSuccess(data));
            console.log(data)
        }
        else {
            dispatch(getDetailsFailed('An error occured'));
        }

    } catch (err) {
        dispatch(getDetailsFailed("An error occured"));
    }
}