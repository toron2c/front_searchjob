import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setStatusSendingVacancy} from "../../../../redux/actions";


const BoxSuccess = styled.div`
  font-size: 23px;
`
const TextSuccess = styled.div`
  margin: 10px;
`
const ButtonSuccess = styled.button`
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

export default function SuccessSendingVacancy() {
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const onClickButton = (e) => {
        e.preventDefault();
        dispatch(setStatusSendingVacancy(false));
        Navigate('/active-vacancies');
    }
    return <BoxSuccess>
        <TextSuccess>
            <div>Успешно!</div>
            <div>Вакансия зарегестрирована!</div>
            <div><ButtonSuccess onClick={onClickButton}>Перейти в активные вакансии</ButtonSuccess></div>
        </TextSuccess>
    </BoxSuccess>
}