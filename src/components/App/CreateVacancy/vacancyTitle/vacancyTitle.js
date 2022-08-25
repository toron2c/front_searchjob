import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {inputTitleVacancy} from "../../../../redux/actions";

const NameField = styled.div`
  margin: 10px;
  font-size: 22px;
  color: dimgrey;
`

const InputTitle = styled.input`
  border: 3px solid #29ab08;
  font-size: 18px;
  border-radius: 4px;
`

export default function VacancyTitle() {
    const titleVacancy = useSelector(state=> state.created.title);
    const dispatch = useDispatch();
    const onChangeHandler = (e) => {
        e.preventDefault();
        dispatch(inputTitleVacancy(e.target.value));
    }
    return (<NameField>
        Загаловок вакансии
       <div> <InputTitle value={titleVacancy} onChange={onChangeHandler} type='text' /></div>
    </NameField>)
}