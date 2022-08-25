import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {putStatusVacancy} from "../../../../redux/actions";

export const VacancyStatusBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 30px;
`
export const VacancyStatusButtonOpen = styled.button`
  display: block;
  background: #29ab08;
  font-size: 17px;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  border: 3px solid #25c00a;
  cursor: pointer;
  :hover {
    color: #29ab08;
    border: 3px solid #29ab08;
    background: #fff;
  }
`
export const VacancyStatusButtonClosed = styled.button`
  display: block;
  background: #fff;
  font-size: 17px;
  color: black;
  padding: 10px 15px;
  border-radius: 5px;
  border: 3px solid #9f0101;
  cursor: pointer;
  :hover {
    color: #9f0101;
    border: 3px solid #9f0101;
    background: #fff;
  }
`

export default function VacancyStatus() {
    const dispatch = useDispatch();
    const VacancyStatus = useSelector(state=> state.vacancy.active);
    const companyId = useSelector(state=> state.vacancy.companyId);
    const vacancyId = useSelector(state=> state.vacancy.vacancyId);

    const changeStatusVacancy = (e) => {
        e.preventDefault()

        dispatch(putStatusVacancy(companyId, vacancyId, !VacancyStatus));
    }


    return (<VacancyStatusBox>
            {
                VacancyStatus && <VacancyStatusButtonClosed onClick={changeStatusVacancy}>Закрыть вакансию</VacancyStatusButtonClosed>
            }
            {
                !VacancyStatus && <VacancyStatusButtonOpen onClick={changeStatusVacancy}>Открыть вакансию</VacancyStatusButtonOpen>
            }
            </VacancyStatusBox>)
}