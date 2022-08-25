import {AUTH, LOAD_ACTIVE_VACANCIES_USER, LOGOUT} from "./types";


const initialState = {
    login: '',
    id: -1,
    role: '',
    activeVacancies: []
}

export const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case AUTH:
            if (action.data.isAuth) {
                return {
                    login: action.data.login,
                    id: action.data.id,
                    role: action.data.role
                }
            } else {
                return state;

            }
        case LOGOUT:
            return {
                login: '',
                id: -1,
                role: ''
            }
        case LOAD_ACTIVE_VACANCIES_USER: {
            return {
                ...state,
                activeVacancies: [...action.data]
            }
        }
        case LOGOUT: {
            return {
                login: '',
                id: -1,
                role: '',
                activeVacancies: []
            }
        }
        default:
            return state;
    }
}