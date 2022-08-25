import styled from "styled-components";
import {useSelector} from "react-redux";
import VacancyItemStatusCompany from "./VacancyItemStatus/VacancyItemStatusCompany";
import React from "react";
import VacancyItemStatusUser from "./VacancyItemStatus/VacancyItemStatusUser";
import {useLocation} from "react-router-dom";
const BoxVacancy = styled.div`
  border: solid 3px #29ab08;
  margin: 5px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  @media(min-width:800px) {
    height: 15vh;
  }
`

const BoxVacancyTitle = styled.h3`
  margin: 10px 0 0 10px;
`

const BoxVacancyDescription = styled.div`
  margin-left: 30px;
  font-size: 15px;
`
const BoxVacancyStatus = styled.div`
  margin: 10px;
  font-size: 10px;
  color: #29ab08;
`

function VacancyItem(props) {
        const role = useSelector(state=> state.profile.role === 'user');
        const currUserId = useSelector(state=> state.profile.id);
        const location = useLocation();
        const currVacancy = useSelector((state)=> {
            if (!role && location.pathname.split('')[3] === 't') {
                return state.allVacancies.vacanciesCompany.find(el => el.vacancy_id === props.id);
            } else {
                return state.allVacancies.vacancies.find(el => el.vacancy_id === props.id);
            }
        })
        const subscribeVacancy = useSelector(state=> {
            if (role && state.profile.activeVacancies) {
               return state.profile.activeVacancies.find(el=> el === props.id)
            }
        } )
        return (<BoxVacancy>
                <div><BoxVacancyTitle>{currVacancy.title}</BoxVacancyTitle>
                    <BoxVacancyDescription>{currVacancy.description}...</BoxVacancyDescription></div>
         <BoxVacancyStatus>
             {role && subscribeVacancy && <VacancyItemStatusUser/> }
             {!role && currVacancy.company_id === currUserId && <VacancyItemStatusCompany vacancyId={props.id} />}
         </BoxVacancyStatus>
            </BoxVacancy>)
}

export default React.memo(VacancyItem)