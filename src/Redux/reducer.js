import { ActionTypes } from "./ActionTypes";

const initialState = {

    // New Redux
    isLoading: false,
    userDetails: {},
    isRegSuccessful: false,
    isSignedIn: false,
    message: '',
    studentDetailsId: '',
    studentDetails: {},

    paid: false,
    registered_course: false,

    studentUserDetails: null,
    complaint: [{
        id: 0,
        message: 'The hostel is smelling'
    }],
    hostel: {
        hostelName: '', hostelFlat: '', hostelRoomNumber: ''
    },
    courses: [{
        courseName: '', courseCode: '', courseUnit: ''
    }],
    // Lecturers section
    student: true,
    approveCourses: false,
    auth: false,
    results: [{
        courseName: '', courseCode: '', coursegrade: ''
    }],
    registered_result: false,
    Notification: 'We welcome all students back from the holidays. You are all advised to start paying your fees so you can have full access to the school portal',
    adminPostedMessage: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case ActionTypes.REGISTER_START:
            return {
                ...state, isLoading: true, isRegSuccessful: false
            }
        case ActionTypes.REGISTER_SUCCESS:
            return {
                ...state, isLoading: false, userDetails: action.payload, isRegSuccessful: true
            }
        case ActionTypes.REGISTER_FAILED:
            return {
                ...state, isLoading: false, isRegSuccessful: false
            }

        case ActionTypes.LOGIN_START:
            return {
                ...state, isLoading: true
            }
        case ActionTypes.LOGIN_SUCCESS:
            return {
                ...state, isLoading: false, isSignedIn: true
            }
        case ActionTypes.LOGIN_FAILED:
            return {
                ...state, isLoading: false, isSignedIn: false
            }
        case ActionTypes.POST_STUDENT_DETAILS_START:
            return {
                ...state, isLoading: true, message: ''
            }

        case ActionTypes.POST_STUDENT_DETAILS_SUCCESS:
            return {
                ...state, isLoading: false, message: '', studentDetailsId: action.payload
            }
        case ActionTypes.POST_STUDENT_DETAILS_FAILED:
            return {
                ...state, isLoading: false, message: action.payload
            }
        case ActionTypes.GET_STUDENT_DETAILS_START:
            return {
                ...state, isLoading: true, message: ''
            }

        case ActionTypes.GET_STUDENT_DETAILS_SUCCESS:
            return {
                ...state, isLoading: false, studentDetails: action.payload
            }

        case ActionTypes.GET_STUDENT_DETAILS_FAILED:
            return {
                ...state, isLoading: false, message: action.payload
            }












        case ActionTypes.STUDENT_PAID:
            return { ...state, paid: true }
        case ActionTypes.COMPLAINTS:
            return {
                ...state, complaint: [...state.complaint, action.payload]
            }
        case ActionTypes.SAVE_HOSTEL:
            return {
                ...state, hostel: action.payload
            }
        case ActionTypes.ADD_COURSE:
            return {
                ...state, courses: [...state.courses, action.payload]
            }
        case ActionTypes.STUDENT_LOGIN:
            return {
                ...state, student: true, auth: true
            }
        case ActionTypes.CREATE_NEW_USER:
            return {
                ...state, studentUserDetails: action.payload
            }
        case ActionTypes.LOGOUT:
            return {
                ...state, auth: false
            }
        // Lecturers section
        case ActionTypes.REGISTER_COURSES:
            return {
                ...state, registered_course: true
            }
        case ActionTypes.APPROVE_COURSES:
            return {
                ...state, approveCourses: true
            }
        case ActionTypes.ADD_RESULT:
            return {
                ...state, results: [...state.results, action.payload]
            }
        case ActionTypes.REGISTER_RESULTS:
            return {
                ...state, registered_result: true
            }
        // 
        case ActionTypes.WELCOME:
            return {
                ...state, auth: true
            }
        case ActionTypes.LECTURER_LOGIN:
            return {
                ...state, student: false, auth: true
            }
        case ActionTypes.NOTIFICATION:
            return {
                ...state, Notification: action.payload, adminPostedMessage: true
            }
        default:
            return state
    }
}

export default reducer