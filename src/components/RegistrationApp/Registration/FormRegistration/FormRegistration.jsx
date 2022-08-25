import styled from "styled-components";
import {useLocation} from "react-router-dom";
import {Link} from "react-router-dom";
import {useState} from "react";
import Modal from "./modal";
import {useDispatch, useSelector} from "react-redux";
import {inputLogin, inputName, inputPass, registrationCompany, registrationUser} from "../../../../redux/actions";
import {ButtonIn} from "../../SignIn/SignIn";
import Header from "../../../Header/Header";


export const Block = styled.div`
  border: 5px solid #29ab08;
  border-radius: 6px;
  width: 40vh;
  margin: 10vh auto;
  position: relative;
  padding: 5px;
`
export const TitleInput = styled.div`
  font-size: 20px;
  color: #000;
  margin: 10px 0 0 20px;
`
export const BlockInput = styled.div`
  width: 90%;
  margin: 0 auto;
`
export const InputField = styled.input`
 width: 100%;
  height: 25px;
  border: 3px solid #29ab08;
  border-radius: 5px;
  font-size: 20px;
`
export const TextFooter = styled.div`
margin: 20px 20px;
`
export const Sign = styled(Link)`
color: #29ab08;
`
export const BlockButton = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 0 30px 10px 0;
`
export const ButtonRegistration = styled(Link)`
  display:block;
  background: #29ab08;
  font-size: 17px;
  color: #fff;
  padding: 10px 15px;
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


export default function FormRegistration() {
    // проверка адреса
    let location = useLocation();

    const dispatch = useDispatch();
    // переменные для формы
    const login = useSelector(state=> state.auth.login);
    const password = useSelector(state=> state.auth.password);
    const name = useSelector(state=> state.auth.nameCompany);

    const [repeatPass, setRepeatPass] = useState('')
    const [messageLogin, setMessageLogin] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [messagePass, setMessagePass] = useState(false);
    const [messageRepeat, setMessageRepeat] = useState(false);
    const [messageName, setMessageName] = useState(false);

    const onChangeHandlerLogin = (e) => {
        e.preventDefault();
        dispatch(inputLogin(e.target.value));
    }
    const onChangeHandlerPass = (e) => {
        e.preventDefault();
        dispatch(inputPass(e.target.value))
    }
    const onChangeHandlerRepeatPass = (e) => {
        e.preventDefault();
        setRepeatPass(e.target.value);
    }
    const onChangeHandlerName = (e) => {
        e.preventDefault();
        dispatch(inputName(e.target.value));
    }

    const handleBlurLogin = (e) => {
        const regexp = /^[a-z0-9]+$/i;
        if (login !== '' && regexp.test(login)) {
           setMessageLogin(false);
           if (!messagePass && !messageRepeat && !messageName) {
               setDisabled(false);
           }
        } else {
            setMessageLogin(true);
            setDisabled(true);
        }
    }
    const checkPass = (e) => {
        const regexp = /^[a-z0-9]+$/i;
        if (e.target.value !== '' && regexp.test(e.target.value)) {
            setMessagePass(false);
            if (!messageLogin && !messageRepeat && !messageName) {
                setDisabled(false);
            }
        } else {
            setMessagePass(true)
            setDisabled(true)
        }
    }
    const checkRepeat = (e) => {
        if (e.target.value !== password) {
            setMessageRepeat(true);
            setDisabled(true)
        } else {
            setMessageRepeat(false);
            if (!messageLogin && !messagePass && !messageName) {
                setDisabled(false);
            }
        }
    }
    const checkNameCompany = (e) => {
        const regex = /^[a-zа-я]+$/i;
        if (e.target.Value !== '' && regex.test(name)) {
            setMessageName(false);
            if (!messageLogin && !messagePass && !messageRepeat) {
                setDisabled(false);
            }
        } else {
            setDisabled(true);
            setMessageName(true);
        }
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (login !== '' && password !== '' && repeatPass !== '') {
            if (location.pathname === '/company-signup') {
                dispatch(registrationCompany(name, login, password));
            } else if (location.pathname === '/signup') {
                dispatch(registrationUser(login, password))
            }
        }
    }
    return (<div>
        <Block>
        <form>
            {
                location.pathname === '/company-signup' &&
               <div>
                <TitleInput>
                    Имя компании
                </TitleInput>
                    <BlockInput><InputField value={name} onChange={onChangeHandlerName} onBlur={checkNameCompany} onFocus={()=> {setMessageName(false)}}/> </BlockInput>
                   {messageName && <Modal text={"Имя компании может содержать только буквы!"}/>}
               </div>
                   }
            <div>
                <TitleInput>
                    Логин
                </TitleInput>
                <BlockInput><InputField onBlur={handleBlurLogin} value={login} onFocus={()=> {setMessageLogin(false)}} onChange={onChangeHandlerLogin}/> </BlockInput>
                {messageLogin && <Modal text={"логин должен содержать латинские буквы и цифры 0 - 9"} />}
                <div>
                    <TitleInput>
                        Пароль
                    </TitleInput>
                    <BlockInput><InputField type="password" value={password} onBlur={checkPass} onFocus={() => {
                        setMessagePass(false)
                    }} onChange={onChangeHandlerPass} /> </BlockInput>
                    {messagePass && <Modal text={"пароль должен содержать латинские буквы и цифры 0-9"} />}
                </div>

                <div>
                    <TitleInput>
                        Повторите пароль
                    </TitleInput>
                    <BlockInput><InputField value={repeatPass} type="password" onBlur={checkRepeat} onFocus={()=>{setMessageRepeat(false)}} onChange={onChangeHandlerRepeatPass} /> </BlockInput>
                    {messageRepeat && <Modal text={"Ошибка! Введеные пароли не совпадают"} />}
                </div>
            </div>
            <TextFooter>
                Уже есть аккаунт? <Sign to={'/login'}>Войти</Sign>
            </TextFooter>
            <BlockButton>
                {!disabled &&  <ButtonIn onClick={onSubmitHandler}>Зарегистрироваться</ButtonIn>}
            </BlockButton>
        </form>
        </Block>
        </div>)
}