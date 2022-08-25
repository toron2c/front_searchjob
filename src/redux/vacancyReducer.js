import {CHANGE_STATUS_VACANCY, GET_VACANCY, LOGOUT} from "./types";

const initialState = {
    vacancyId: -1,
    companyId: -1,
    title: '',
    description: '',
    englishLvl: '',
    grade: '',
    tags: [],
    active: true
}

export const vacancyReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_VACANCY:
           return {
               vacancyId: action.data.vacancy_id,
               companyId: action.data.company_id,
               title: action.data.title,
               description: action.data.description,
               englishLvl: action.data.english_lvl,
               grade: action.data.grade,
               tags: [...action.data.tagName],
               active: action.data.active
           }
        case CHANGE_STATUS_VACANCY: {
            return {
                ...state,
                active: !state.active
            }
        }
        case LOGOUT: {
            return {
                vacancyId: -1,
                companyId: -1,
                title: '',
                description: '',
                englishLvl: '',
                grade: '',
                tags: [],
                active: true
            }
        }
        default:
            return state;
    }
}