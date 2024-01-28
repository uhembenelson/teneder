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

// Get All Notifications

// const fetchNotificationStart = () => ({
//     type: actionTypes.FETCH_ORGANIZATION_NOTIFICATION_START
// })

// const fetchNotificationSuccess = (data) => ({
//     type: actionTypes.FETCH_ORGANIZATION_NOTIFICATION_SUCCESS,
//     payload: data
// })

// const fetchNotificationFailed = (data) => ({
//     type: actionTypes.FETCH_ORGANIZATION_NOTIFICATION_FAILED,
//     payload: data
// })

// const url = 'https://school-project-production-459d.up.railway.app/v8/notification/organization'
// const fetcher = async (url, token) => {
//     const headers = new Headers();

//     if (token) {
//         headers.append('Authorization', `Bearer ${token}`);
//     }

//     const response = await fetch(url, { headers });
//     const data = await response.json();
//     return data;
// };

// export const fetchNotification = (token) => async (dispatch) => {
//     // try {
//     //     dispatch(fetchNotificationStart());
//     //     let res = await fetch(`https://school-project-production-459d.up.railway.app/v8/notification/organization`, {
//     //         method: "GET",
//     //         headers: {
//     //             "Content-Type": "application/json",
//     //             'Authorization': `Bearer ${token}`
//     //         }
//     //     })
//     //     const data = await res.json();
//     //     console.log(data)
//     //     if (res.status === 200) {
//     //         dispatch(fetchNotificationSuccess(data));

//     //     }
//     //     else {
//     //         dispatch(fetchNotificationFailed(data.message));
//     //     }

//     // } catch (err) {
//     //     dispatch(fetchNotificationFailed("An error occured"));
//     // }


//     dispatch(fetchNotificationStart());
//     try {
//         const result = await useSWR([url, token], fetcher);
//         dispatch(fetchNotificationSuccess(result));
//     }
//     catch (err) {
//         fetchNotificationFailed(err)
//     }
// }