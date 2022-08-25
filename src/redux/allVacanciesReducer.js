import {GET_COUNT_RESPONSE, GET_VACANCIES_COMPANY, LOAD_VACANCIES, LOGOUT} from "./types";


const initialState = {
    vacancies:[],
    depsVacancy:[],
    vacanciesCompany: []
};



export const allVacanciesReducer = (state=initialState, action) => {
    switch (action.type) {

        case LOAD_VACANCIES:
            return {
                ...state,
                vacancies: [...action.data]
            }
        case GET_COUNT_RESPONSE:
            if (state.depsVacancy.length === 0) {
                return {
                    ...state,
                    depsVacancy: [action.data]
                }
            }
            if (state.depsVacancy.find(el => el.id === action.data.id)) {
                return state;
            }
            return {
                ...state,
                depsVacancy: [...state.depsVacancy, action.data]
            }
        case GET_VACANCIES_COMPANY:
            return {
                ...state,
                vacanciesCompany: [...action.data]
            }
        case LOGOUT:
            return {
                vacancies:[],
                depsVacancy:[],
                vacanciesCompany: []
            }
        default:
            return state;
    }
}