import {Block, TitleInput} from "../../FormRegistration/FormRegistration";
import {cleanData} from "../../../../../redux/actions";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {Link} from "react-router-dom";

const ButtonRegistration = styled(Link)`
  display:block;
  background: #29ab08;
  font-size: 17px;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  border: 3px solid #25c00a;
  cursor: pointer;
  text-decoration:none;
  width: 40%;
  margin: 0 auto;
  :hover {
    color: #29ab08;
    border: 3px solid #29ab08;
    background: #fff;
  }
`
export default function SuccessComponent() {
    const dispatch = useDispatch();
    const clean = (e) => {
        dispatch(cleanData());
    }
    return (<Block>
        <TitleInput> Поздравляем! </TitleInput>
        <TitleInput>Регистрация пройдена успешно, вы можете зайти</TitleInput>
        <ButtonRegistration onClick={clean} to={'/login'}>Авторизоваться</ButtonRegistration>
    </Block>)
}