import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {inputDescriptionVacancy} from "../../../../redux/actions";

const VacancyDescriptionBlock = styled.div`
  margin: 10px;
  font-size: 22px;
  color: dimgrey;
`

const InputDescription = styled.textarea`
  border: 3px solid #29ab08;
  font-size: 18px;
  border-radius: 4px; 
  resize: none;
  width: 25em;
  height: 15em;
  @media(max-width: 500px) {
    width: 50vw
  }
  
`

export default function VacancyDescription() {
    const textArea = useSelector(state=> state.created.description);
    const dispatch = useDispatch();
    const onChangeHandler = (e) => {
        e.preventDefault();
        dispatch(inputDescriptionVacancy(e.target.value));
    }

    return (<VacancyDescriptionBlock>
        Описание вакансии
        <div>
            <InputDescription value={textArea} onChange={onChangeHandler}/>
        </div>
    </VacancyDescriptionBlock>)
}