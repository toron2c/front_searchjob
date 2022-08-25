import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getVacanciesCompany} from "../../../redux/actions";
import VacancyItem from "../Vacancies/VacancyItem/VacancyItem";
import {Link, Outlet} from "react-router-dom";
import styled from "styled-components";

const ActiveVacanciesBox = styled.div`
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
export const VacancyLink = styled(Link)`
  color: #282c34;
  text-decoration: none;
`
export default function ActiveVacancies() {
    const role = useSelector(state=>state.profile.role === 'user');
    const id = useSelector(state=> state.profile.id);
    const dispatch = useDispatch();
    const vacancies = useSelector((state) => {
        if (role) {
            return state.allVacancies.vacancies.filter((el) => {
               for (let i = 0; i < state.profile.activeVacancies.length; i++) {
                    if (el.vacancy_id ===  state.profile.activeVacancies[i]) {
                        return el;
                    }
                }
            })
            //REFACTOR
        } else {
            if (state.allVacancies.vacanciesCompany) {
                return state.allVacancies.vacanciesCompany;
            }
        }
    });
    useEffect(()=> {
        if (!role) {
            dispatch(getVacanciesCompany(id));
        }
    },[])

    let list = vacancies.map((el, idx) => {
        return <VacancyLink key={idx} to={`${el.vacancy_id}`}><VacancyItem id={el.vacancy_id} /></VacancyLink>
    })

    return  (<ActiveVacanciesBox>
        <div>
            {list}
        </div>
            <Outlet />
    </ActiveVacanciesBox>)
}

