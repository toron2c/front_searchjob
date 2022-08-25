import { useSelector} from "react-redux";
import VacancyItem from "./VacancyItem/VacancyItem";
import React from 'react'
import styled from "styled-components";
import {VacancyLink} from "../ActiveVacancies/ActiveVacancies";
import {Outlet} from "react-router-dom";

const Box = styled.div`
  display: grid;
  grid-template-columns: 39vw 45vw;
  gap: 3px;
  align-items: start;
  @media(max-width: 800px) {
    grid-template-columns: 73vw 0;
  }
  @media(max-width: 500px) {
    grid-template-columns: 100vw;
  }
`

const Vacancies = () => {
    const vacancies = useSelector(state=> state.allVacancies.vacancies);

    const list = vacancies.map((el,index) => {
        return <VacancyLink to={`${el.vacancy_id}`} key={index}><VacancyItem id={el.vacancy_id}  /></VacancyLink>
    } )

    return (
        <Box>
            <div>{list}</div>
        <Outlet />
        </Box>
    )
}

export {Vacancies}