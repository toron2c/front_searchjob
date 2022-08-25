import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {cleanNewVacancy, createVacancy} from "../../../../redux/actions";

const BoxSubmit = styled.div`
  margin:10px;
  display:flex;
  flex-direction: row-reverse;
`
const BoxButton = styled.div`
  margin: 5px;
`
const AcceptButton = styled.button`
  background: #29ab08;
  font-size: 17px;
  color: #fff;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid #25c00a;
  :hover {
    color: #29ab08;
    background: #fff;
    border: 2px solid #29ab08;
  }
`
const DeclineButton = styled.button`
  background: #884b4b;
  font-size: 17px;
  color: #fff;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid #ff0017;

  :hover {
    color: #720913;
    background: #fff;
    border: 2px solid #720913;
  }
`
export default function VacancySubmit() {
    const dispatch = useDispatch();
    const id = useSelector(state=> state.profile.id);
    const dataVacancy = useSelector(state=> state.created);
    const clearData = (e) => {
        e.preventDefault();
        dispatch(cleanNewVacancy());
    }
    const sendVacancy = (e) => {
        e.preventDefault();
        dispatch(createVacancy(id, dataVacancy.title, dataVacancy.description, dataVacancy.currentEnglishLvl, dataVacancy.currentGrade, dataVacancy.tags))
    }

    return (<BoxSubmit>
            <BoxButton><DeclineButton onClick={clearData}>Очистить данные</DeclineButton></BoxButton>
            <BoxButton><AcceptButton onClick={sendVacancy}>Создать вакансию</AcceptButton></BoxButton>
    </BoxSubmit>)
}