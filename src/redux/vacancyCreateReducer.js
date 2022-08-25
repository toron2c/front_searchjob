import {
    ADD_TAG,
    CLEAN_NEW_VACANCY,
    CREATE_TAG, CREATE_VACANCY,
    DELETE_CURRENT_TAG,
    INPUT_DESCRIPTION_VACANCY,
    INPUT_TITLE_VACANCY, SET_ENGLISH_LVL, SET_GRADE, SET_STATUS_SENDING_VACANCY, LOGOUT
} from "./types";

const initialState = {
    title: '',
    description: '',
    englishLvl: ['Beginner', 'Pre Intermediate', 'Intermediate', 'Upper Intermediate', 'Advanced', 'Proficient'],
    grade: ['Intern', 'Junior', 'Junior+', 'Middle', 'Senior', 'TeamLead'],
    tags: [],
    currentEnglishLvl: '',
    currentGrade: '',
    sending: false
}
export const vacancyCreateReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TAG:
            if (state.tags.length === 0) {
                return {
                    ...state,
                    tags: [action.data]
                }
            }
            if (state.tags.find(el => el.id === action.data.id)) {
                return state;
            }
            return {
                ...state,
                tags: [...state.tags, action.data]
            }
        case ADD_TAG:
            if (state.tags.length === 0) {
                return {
                    ...state,
                    tags: [action.data]
                }
            }
            if (state.tags.find(el => el.id === action.data.id)) {
                return state;
            }
            return {
                ...state,
                tags: [...state.tags, action.data]
            }
        case INPUT_TITLE_VACANCY:
            return {
                ...state,
                title: action.text
            }
        case INPUT_DESCRIPTION_VACANCY:
            return {
                ...state,
                description: action.text
            }
        case DELETE_CURRENT_TAG:
            const newTags = state.tags.filter(el=> el.id !== action.id);
            return {
                ...state,
                tags: newTags
            }
        case CLEAN_NEW_VACANCY:
            return {
                ...state,
                tags: [],
                currentEnglishLvl: '',
                currentGrade: '',
                title: '',
                description: ''
            }
        case SET_ENGLISH_LVL:
            return {
                ...state,
                currentEnglishLvl: action.value
            }
        case SET_GRADE:
            return {
                ...state,
                currentGrade: action.value
            }
        case CREATE_VACANCY:
            return {
                ...state,
                sending: true
            }
        case SET_STATUS_SENDING_VACANCY:
            return {
                ...state,
                sending: action.sending
            }
        case LOGOUT: {
            return {
                title: '',
                description: '',
                englishLvl: ['Beginner', 'Pre Intermediate', 'Intermediate', 'Upper Intermediate', 'Advanced', 'Proficient'],
                grade: ['Intern', 'Junior', 'Junior+', 'Middle', 'Senior', 'TeamLead'],
                tags: [],
                currentEnglishLvl: '',
                currentGrade: '',
                sending: false
            }
        }
        default:
            return state;
    }
}