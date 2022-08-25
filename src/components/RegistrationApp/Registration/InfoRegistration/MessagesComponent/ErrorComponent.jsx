import {Block, TitleInput} from "../../FormRegistration/FormRegistration";

import {useDispatch} from "react-redux";
import {cleanData} from "../../../../../redux/actions";
import styled from "styled-components";
import {Link} from "react-router-dom";


export const ButtonReturn = styled(Link)`
  display:block;
  height: 30px;
  background: #29ab08;
  font-size: 14px;
  width: 50%;
  margin: 10px 5px;
  color: #fff;
 
  padding: 5px 13px 20px 5px;
  border-radius: 5px;
  border: 3px solid #25c00a;
  cursor: pointer;
  text-decoration:none;
  :hover {
    color: #29ab08;
    border: 3px solid #29ab08;
    background: #fff;
  }
  :disabled {
    color: #000;
    background: grey;
    border: 3px solid #000;
  }
`
const BoxButtons = styled.div`
  display: flex;
`

export default function ErrorComponent() {
    const dispatch = useDispatch();

    const clean = (e) => {
        dispatch(cleanData());
    }


    return (
        <Block>
            <TitleInput> Произошла ошибка! </TitleInput>
            <TitleInput>Возможно логин который вы использовали уже занят, попробуйте ещё раз, в случае повторении ошибки обратитесь в службу поддержки
            support@searchjob.ru
            </TitleInput>
            <BoxButtons>
                <ButtonReturn onClick={clean} to={'/company-signup'}>Зарегестрироваться как компания</ButtonReturn>
                <ButtonReturn onClick={clean} to={'/signup'}>Зарегеистрироваться как сотрудник</ButtonReturn>
            </BoxButtons>
        </Block>
    )
}