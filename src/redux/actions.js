import
{
    INPUT_PASS,
    INPUT_LOGIN,
    INPUT_NAME,
    REGISTRATION_COMPANY,
    LOAD_ON,
    CLEAN_DATA,
    REGISTRATION_USER,
    AUTH,
    LOAD_OFF,
    LOGOUT,
    LOAD_VACANCIES,
    GET_COUNT_RESPONSE,
    LOAD_ACTIVE_VACANCIES_USER,
    GET_VACANCIES_COMPANY,
    INPUT_NEW_TAG,
    GET_TAGS,
    CREATE_TAG,
    ADD_TAG,
    INPUT_TITLE_VACANCY,
    INPUT_DESCRIPTION_VACANCY,
    DELETE_CURRENT_TAG,
    CLEAN_NEW_VACANCY,
    SET_ENGLISH_LVL,
    SET_GRADE,
    CREATE_VACANCY, SET_STATUS_SENDING_VACANCY, GET_VACANCY, CHANGE_STATUS_VACANCY
}
    from "./types";
import {
    apiAddTagOnVacancy,
    apiAuthorized,
    apiChangeStatusVacancy,
    apiCreateTag,
    apiCreateVacancy,
    apiDeleteResponseOnVacancy,
    apiGetAllTags,
    apiGetAllVacanciesCompany,
    apiGetResponses,
    apiGetVacanciesUser,
    apiGetVacancy,
    apiLoadVacancy,
    apiRegistrationCompany,
    apiRegistrationUser,
    apiResponseOnVacancy
} from "../api/api";


export function inputLogin(value) {
    return {
        type: INPUT_LOGIN,
        value
    }
}

export function inputPass(value) {
    return {
        type: INPUT_PASS,
        value
    }
}

export function inputName(value) {
    return {
        type: INPUT_NAME,
        value
    }
}

export function registrationCompany(name, login, password) {
    return async dispatch => {
        dispatch(loadOn());
      let data = await  apiRegistrationCompany(name,login,password)
          .then(res=> {
              return {...res.data, status: {sending: true,error: false, success: true}}
          })
          .catch(err=> {
              return {...err.data, status: {sending: true,error: true, success: false}}
          })
        dispatch({
            type: REGISTRATION_COMPANY,
            data: data
        })
        dispatch(loadOff());
    }

}

export function registrationUser(login, password) {
    return async dispatch => {
        dispatch(loadOn());
        try {
            let data = await apiRegistrationUser(login, password);
            dispatch(loadOff());
            return dispatch({
                type: REGISTRATION_USER,
                data: {...data, status: {sending: true, error: false, success: true}}
            })

        }
        catch (e) {
            dispatch(loadOff());
            return dispatch({
                type: REGISTRATION_USER,
                data: {...e, status: {sending: true, error: true, success: false}}
            })
        }

    }
}

export function authorization(login, password) {
    return async dispatch => {
        dispatch(loadOn());
        try {
            let data = await apiAuthorized(login, password);
            dispatch(loadOff());
            return dispatch({
                type: AUTH,
                data: {
                    login : data.data.data.login,
                    id: data.data.data.id,
                    role: data.data.data.role,
                    isAuth: true,
                    errorAuth: false,
                }
            })
        } catch (e) {
            dispatch(loadOff());
            return dispatch({
                type: AUTH,
                data: {
                    login: '',
                    id: -1,
                    role: '',
                    isAuth: false,
                    errorAuth: true,
                }
            })
        }
    }
}

export function loadOn() {
    return {
        type: LOAD_ON,
        load: true
    }
}
export function loadOff() {
    return {
        type: LOAD_OFF,
        load: false
    }
}

export function cleanData() {
    return {
        type: CLEAN_DATA
    }
}
export function logout() {
    return {
        type: LOGOUT
    }
}

export function loadVacancy() {
    return async dispatch => {
        try {
            dispatch(loadOn())
            let data = await apiLoadVacancy();
            dispatch(loadOff());
            return dispatch({
                type: LOAD_VACANCIES,
                data: data.data
            })
        } catch(e) {
            dispatch(loadOff());
            console.log(e);
        }
    }
}

export function getCountsResponse(vacancyId) {
    return async dispatch => {
        try {
            dispatch(loadOn());
            let data = await apiGetResponses(vacancyId);
            dispatch(loadOff());
            return dispatch({
                type: GET_COUNT_RESPONSE,
                data: {
                    id: vacancyId,
                    count: data.data.count
                }
            })
        } catch(e) {
            dispatch(loadOff());
            console.log(e);
        }
    }
}

export function loadUserVacancies(user_id) {
    return async dispatch => {
        try {
            dispatch(loadOn());
            let data = await apiGetVacanciesUser(user_id);
            dispatch(loadOff());

            return dispatch({
                type: LOAD_ACTIVE_VACANCIES_USER,
                data: data.data.idS
            })
        } catch(e) {
            dispatch(loadOff());
            console.log(e);
        }
    }
}

export function getVacanciesCompany(companyId) {
    return async dispatch => {
        try {
            dispatch(loadOn());
            let data = await apiGetAllVacanciesCompany(companyId);
            dispatch(loadOff());
            return dispatch({
                type: GET_VACANCIES_COMPANY,
                data: data.data
            })
        } catch(e) {
            dispatch(loadOff());
            console.log(e);
        }
    }
}

export function inputNewTag(text) {
    return {
        type: INPUT_NEW_TAG,
        text: text
    }
}

export function getAllTags() {
    return async dispatch => {
        try {
            dispatch(loadOn());
            let data = await apiGetAllTags();
            dispatch(loadOff());
            return dispatch({
                type: GET_TAGS,
                data: data.data
            })
        } catch(e) {
            console.log(e);
        }
    }
}

export function createTag(name, tags) {
    if (tags.find(el=> el.name === name)) {
        return {
            type: ADD_TAG,
            data: tags.find(el=> el.name === name)
        }
    }
    return async dispatch => {
        try {
            dispatch(loadOn());
            let data = await apiCreateTag(name);
            dispatch(loadOff());
            dispatch(getAllTags())
            return dispatch({
                type: CREATE_TAG,
                data: {
                    id: data.data.newTag.id,
                    name: data.data.newTag.name
                }
            })
        } catch(e) {
            dispatch(loadOff());
            console.log(e);
        }
    }
}

export function inputTitleVacancy(text) {
    return {
        type: INPUT_TITLE_VACANCY,
        text
    }
}

export function inputDescriptionVacancy(text) {
    return {
        type: INPUT_DESCRIPTION_VACANCY,
        text
    }
}

export function deleteCurrentTag(id) {
    return {
        type: DELETE_CURRENT_TAG,
        id
    }
}

export function cleanNewVacancy() {
    return {
        type: CLEAN_NEW_VACANCY
    }
}

export function setEnglishLvl(value) {
    return {
        type: SET_ENGLISH_LVL,
        value
    }
}

export function setGrade(value) {
    return {
        type: SET_GRADE,
        value
    }
}

export function createVacancy(id, title, description, englishLvl, grade, tags) {
    return async dispatch => {
        try {
            dispatch(loadOn);
            let data = await apiCreateVacancy(id, title, description, englishLvl, grade);
            tags.forEach((el) => {
                dispatch(addTagOnVacancy(data.data.vacancy_id, el.id));
            });
            dispatch(loadVacancy());
            dispatch(getVacanciesCompany(id));
            dispatch(loadOff());
            dispatch(cleanNewVacancy());

            return dispatch({
                type: CREATE_VACANCY
            })
        } catch (e) {
            dispatch(loadOff());
            console.log(e);
        }
    }
}

export function addTagOnVacancy(vacancyId, tagId) {
    return async () => {
        try {
            await apiAddTagOnVacancy(vacancyId, tagId);
        } catch (e) {
            
        }
    }
}

export function setStatusSendingVacancy(res) {
    return {
        type: SET_STATUS_SENDING_VACANCY,
        sending: res
    }
}

export function getVacancy(id) {
    return async dispatch => {
        try {
            dispatch(loadOn());
            let data = await apiGetVacancy(id);
            dispatch(loadOff());
            return dispatch({
                type: GET_VACANCY,
                data: {...data.data.currVacancy, tagName: [...data.data.tagName]}
            })
        } catch (e) {
            dispatch(loadOff());
        }
    }
}

export function putStatusVacancy(companyId, vacancyId, status) {
    return async dispatch => {
        try {
            dispatch(loadOn());
            let res = await apiChangeStatusVacancy(companyId, vacancyId, status);
            dispatch(loadOff());
            return dispatch({
                type: CHANGE_STATUS_VACANCY,
                status: res
            })
        } catch (e) {
            dispatch(loadOff());
        }
    }
}

export function postResponseOnVacancy(userId, vacancyId) {
    return async dispatch => {
        try {
            dispatch(loadOn());
            await apiResponseOnVacancy(userId, vacancyId);
            dispatch(loadUserVacancies(userId));
            dispatch(loadOff());
        } catch(e) {
            console.log(e);
            dispatch(loadOff());
        }
    }
}

export function deleteResponseOnVacancy(userId, vacancyId) {
    return async dispatch => {
        try {
            dispatch(loadOn());
            await apiDeleteResponseOnVacancy(userId, vacancyId);
            dispatch(loadUserVacancies(userId));
            dispatch(loadOff());
        } catch (e) {
            dispatch(loadOff());
        }
    }
}