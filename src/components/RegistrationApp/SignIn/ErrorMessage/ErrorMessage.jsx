import {Block, TitleInput} from "../../Registration/FormRegistration/FormRegistration";
import {useDispatch} from "react-redux";
import {cleanData} from "../../../../redux/actions";
import styled from "styled-components";

const DivButton = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`

const ButtonIn = styled.button`
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

export default function ErrorMessage() {
    const dispatch = useDispatch();
    const clean = (e) => {
        e.preventDefault()
        dispatch(cleanData());
    }
   return <Block>
       <TitleInput>Произошла ошибка!
       </TitleInput>
       <TitleInput>
           Логин или пароль введен неверно, попробуйте ещё раз.
       </TitleInput>
       <TitleInput>
           В случае повторения ошибки, обратитесь в службу поддержки support@searchjob.ru
       </TitleInput>
      <DivButton><ButtonIn onClick={clean} to={'/login'}>Войти</ButtonIn></DivButton>
    </Block>
}