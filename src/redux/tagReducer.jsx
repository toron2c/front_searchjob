import {ADD_TAG, CREATE_TAG, GET_TAGS, INPUT_NEW_TAG, LOGOUT} from "./types";

const initialState = {
    tags: [],
    newTag: '',
}

export const tagReducer = (state=initialState, action)=> {
    switch(action.type) {
        case INPUT_NEW_TAG:
            return {
                ...state,
                newTag: action.text
            }
        case GET_TAGS:
            return {
                ...state,
                tags: [...action.data.data]
            }
        case CREATE_TAG:
            return {
                ...state,
                newTag: ''
            }
        case ADD_TAG:
            return {
                ...state,
                newTag: ''
            }
        case LOGOUT: {
            return {
                tags: [],
                newTag: '',
            }
        }
        default:
            return state;
    }
}