import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCountsResponse} from "../../../../../redux/actions";
import styled from "styled-components";
import people from './../../../../../img/people.svg'

const VacancyStatusCompanyResponsed = styled.div`
  font-size: 13px;
`

export default function VacancyItemStatusCompany (props)  {
    const count = useSelector(state=> state.allVacancies.depsVacancy.find(el=> el.id === props.vacancyId));
    const dispatch = useDispatch();

    useEffect(() => {
           dispatch(getCountsResponse(props.vacancyId))
       },[])
        return (<VacancyStatusCompanyResponsed>
            {count && count.count} <img src={people} width={"15"} height={"15"} alt="people"/>
    </VacancyStatusCompanyResponsed>)
}

