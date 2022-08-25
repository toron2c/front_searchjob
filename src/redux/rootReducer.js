import {combineReducers} from "redux";
import {authReducer} from './authReducer'
import {profileReducer} from "./profileReducer";
import {allVacanciesReducer} from "./allVacanciesReducer";
import {vacancyCreateReducer} from "./vacancyCreateReducer";
import {tagReducer} from "./tagReducer";
import {vacancyReducer} from "./vacancyReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    allVacancies: allVacanciesReducer,
    created: vacancyCreateReducer,
    tag: tagReducer,
    vacancy: vacancyReducer
})