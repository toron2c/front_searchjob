import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getVacancy} from "../../../redux/actions";
import VacancyTitle from "./VacancyTitle/VacancyTitle";
import styled from "styled-components";
import VacancyDescription from "./VacancyDescription/VacancyDescription";
import {VacancyEnglishLvl} from "./VacancyEnglishLvl/VacancyEnglishLvl";
import VacancyGrade from "./VacancyGrade/VacancyGrade";
import VacancyTags from "./VacancyTags/VacancyTags";
import VacancyStatus from "./VacancyStatus/VacancyStatus";
import VacancyStatusUser from "./VacancyStatusUser/VacancyStatusUser";

const BoxVacancy = styled.div`
  border: 2px solid #29ab08;
  border-radius: 6px;
  margin: 5px;
`

export default function Vacancy() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const role = useSelector(state=> state.profile.role === 'user');
    const idUser = useSelector(state=> state.profile.id)
    const companyIdVacancy = useSelector(state=>state.vacancy.companyId === idUser)


    useEffect(()=> {
        dispatch(getVacancy(id));
    }, [id])
    return (<BoxVacancy>
        <VacancyTitle />
        <VacancyDescription />
        <VacancyEnglishLvl />
        <VacancyGrade />
        <VacancyTags />
        {!role && companyIdVacancy && <VacancyStatus /> }
        {role && <VacancyStatusUser />}
    </BoxVacancy>)
}