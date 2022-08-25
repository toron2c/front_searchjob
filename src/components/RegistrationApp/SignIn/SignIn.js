import {
    Block,
    BlockButton,
    BlockInput,
    InputField, Sign,
    TextFooter,
    TitleInput
} from "../Registration/FormRegistration/FormRegistration";

import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {authorization, inputLogin, inputPass} from "../../../redux/actions";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Header from "../../Header/Header";



export const ButtonIn = styled.button`
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
  :disabled {
    color: #000;
    background: grey;
    border: 3px solid #000;
  }
`

export default function SignIn() {

    const login = useSelector(state=> state.auth.login);
    const password = useSelector(state=> state.auth.password);
    const errorAuth = useSelector(state=> state.auth.auth.errorAuth)
    const dispatch = useDispatch();
    const signIn = (e) => {
        e.preventDefault();
        dispatch(authorization(login, password));
    }

    const onChangePass = (e) => {
        e.preventDefault();
        dispatch(inputPass(e.target.value));
    }
    const onChangeLogin = (e) => {
        e.preventDefault();
        dispatch(inputLogin(e.target.value));
    }


    return (<div>
            {errorAuth ? <ErrorMessage /> :<div>
                <Block>
                <TitleInput>
                Логин
                </TitleInput>
                <BlockInput> <InputField value={login} onChange={onChangeLogin}/> </BlockInput>

                <div>
                <TitleInput>
                Пароль
                </TitleInput>
                <BlockInput><InputField type="password" value={password} onChange={onChangePass}/> </BlockInput>
                </div>
                <TextFooter>
                Нет аккаунта? <Sign to={'/signup'}>Зарегестрироваться как соискатель</Sign>
                <div><Sign to={'/company-signup'}>Зарегестрироваться как компания</Sign></div>
                </TextFooter>
                <BlockButton>
                <ButtonIn onClick={signIn}>Войти</ButtonIn>
                </BlockButton>
                </Block>
            </div>}

        </div>
)
}