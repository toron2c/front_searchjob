import styled from "styled-components";
import {Link} from "react-router-dom";
const BoxRegistation = styled.div`
    display: flex;
  justify-content: center;
  margin: 30vh;
  font-weight: bold;
  @media(max-width: 500px) {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
`
const BoxButton = styled.div`
  margin: 0 3vw;
`
const ButtonRegistration = styled(Link)`
  font-size: 40px;
  background: #29ab08;
  border: 3px solid #25c00a;
  color: white;
  border-radius: 10px;
  text-decoration: none;
  margin: 0 5px;
  display: block;
  padding: 10px 5px;
  :hover {
    color: #29ab08;
    background-color: #fff;
    border: 3px solid #29ab08;
  }
  @media(max-width: 500px) {
    margin: 5vh auto;
    padding: 10px 5px;
  }
`


export function Title() {
    return (
        <BoxRegistation>
            <BoxButton> <ButtonRegistration to='/company-signup'>Регистрация для компании</ButtonRegistration></BoxButton>
            <BoxButton> <ButtonRegistration to='/signup'>Регистрация для соискателя</ButtonRegistration></BoxButton>
        </BoxRegistation>
    )
}