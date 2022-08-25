import axios from "axios";

const instance =
    axios.create({
        baseURL:'http://192.168.0.103:7070/api/',
    });

export const apiRegistrationUser = (login, password) => {
    return instance.post('user/signup', {
            "user_login": login,
            "user_password": password
    });
}

export const apiRegistrationCompany = (name, login, password) => {
    return instance.post('company/company-signup', {
        "company_name": name,
        "company_login": login,
        "company_password": password
    });
}
export const apiAuthorized = (login, password) => {
    return instance.post('login', {
        "login": login,
        "password": password
    });
}

export const apiLoadVacancy = () => {
    return instance.get('vacancies');
}

export const apiGetResponses = (vacancyId) => {
    return instance.get(`company/vacancy/${vacancyId}`);
}

export const apiGetVacanciesUser = (userId) => {
    return instance.get(`user/my-vacancies/${userId}`)
}

export const apiGetAllVacanciesCompany = (companyId) => {
    return instance.get(`company/active-vacancies/${companyId}`)
}

export const apiGetAllTags = () => {
    return instance.get(`company/tag`);
}

export const apiCreateTag = (name) => {
    return instance.post(`company/create-tag`, {
        "nameTag": name
    })
}

export const apiCreateVacancy = (id, title, description, englishLvl, grade, active=true) => {
    return instance.post(`company/create-vacancy`, {
        "company_id": id,
        "title": title,
        "description": description,
        "english_lvl": englishLvl,
        "grade": grade,
        "active": active
    })
}

export const apiAddTagOnVacancy = (vacancyId, tagId) => {
    return instance.post(`company/create-vacancy/tag`, {
        "vacancy_id": vacancyId,
        "tag_id": tagId
    })
}

export const apiGetVacancy = (vacancyId) => {
    return instance.get(`vacancies/${vacancyId}`);
}

export const apiChangeStatusVacancy = (companyId, vacancyId, status) => {
    return instance.put(`company/vacancy`, {
        "company_id": companyId,
        "vacancy_id": vacancyId,
        "value": status
    })
}

export const apiResponseOnVacancy = (userId, vacancyId) => {
    return instance.post(`user/vacancies`, {
        "user_id": userId,
        "vacancy_id": vacancyId
    })
}

export const apiDeleteResponseOnVacancy = (userId, vacancyId) => {
    return instance.delete(`user/vacancies/${userId}/${vacancyId}`)
}