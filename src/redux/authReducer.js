import {
    AUTH,
    CLEAN_DATA,
    INPUT_LOGIN,
    INPUT_NAME,
    INPUT_PASS,
    LOAD_OFF,
    LOAD_ON, LOGOUT,
    REGISTRATION_COMPANY,
    REGISTRATION_USER
} from "./types";

const initialState = {
    login:'',
    password: '',
    nameCompany: '',
    status: {
        success: false,
        error: false,
        sending: false
    },
    auth:{
    isAuth: false,
    errorAuth: false,
}
};

export const authReducer = (state=initialState, action) => {

    switch(action.type) {
        case INPUT_LOGIN:
            return {
                ...state,
                login: action.value
            }
        case INPUT_PASS:
            return {
                ...state,
                password: action.value
            }
        case INPUT_NAME:
            return {
                ...state,
                nameCompany: action.value
            }
        case REGISTRATION_COMPANY:
            return {
                ...state,
                login:'',
                password: '',
                nameCompany: '',
                status: {
                    ...state.status,
                    success: action.data.status.success,
                    error: action.data.status.error,
                    sending: action.data.status.sending
                }
            }
        case REGISTRATION_USER: {
            return {
                ...state,
                login: '',
                password: '',
                nameCompany: '',
                status: {
                    ...state.status,
                    success: action.data.status.success,
                    error: action.data.status.error,
                    sending: action.data.status.sending
                }
            }
        }
        case LOAD_ON:
            return {
                ...state,
                load: true,
            }
        case LOAD_OFF:
            return {
                ...state,
                load: false,
            }
        case CLEAN_DATA:
            return {
                ...state,
                login:'',
                password: '',
                nameCompany: '',
                status: {
                    ...state.status,
                    success: false,
                    error: false,
                    sending: false
                },
                auth: {
                    isAuth: false,
                    errorAuth: false,
                },
                load: false,
            }
        case AUTH:
            return {
                ...state,
                password: '',
                auth: {
                    isAuth: action.data.isAuth,
                    errorAuth: action.data.errorAuth
                }
            }
        case LOGOUT:
            return {
                login:'',
                password: '',
                nameCompany: '',
                status: {
                    success: false,
                    error: false,
                    sending: false
                },
                auth:{
                    isAuth: false,
                    errorAuth: false,
                }
            }
        default:
            return state;
    }
}