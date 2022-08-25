import {NavLink, Outlet, useNavigate} from "react-router-dom";
import vacancies from "../../../img/vacancies.svg";
import myVacancy from "../../../img/my-vacanciec.svg";
import createVacancy from "../../../img/create-vacancy.svg";
import logoutImg from './../../../img/logoutImg.svg'
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../../redux/actions";

const ImgBlock = styled.div`
  width: 100px;
  
`


const NavUnlisted = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 10px;
  width: 125px;
  padding: 0;
  
  a {
    text-decoration: none;
  }

  div {
    list-style: none;
    padding: 5px;
    border-radius: 5px;
    font-weight: bold;
    color: #29ab08;
    margin-top: 5px;
    :hover {
      background-color: #29ab08;
      color: #fff;
    }
  }
  .last {
    margin-top: 150px;
  }

  :last-child {
    margin: 100px 0 0 0;
  }

  .active {
    div {
      background-color: #29ab08;
      border-radius: 5px;
      color: #fff;
    }

  }
  @media(max-width: 500px) {
    flex-direction: row;
    .last {
      margin: 0;
    }
    :last-child {
      margin: 0;
    }
    div {
      margin: 0 5px;
    }
    .img {
      display: none;
      
    }
  }
`
const GeneralBox = styled.div`
  display: flex;
  gap: 5px;
  @media(max-width: 500px) {
    flex-direction: column;
  }
`

const Map = () => {
    const address = useSelector( state => state.profile.role === 'user');
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const logoutHandler = (e) => {
        e.preventDefault();
        dispatch(logout());
        Navigate('/');
    }
    return <GeneralBox>
    <NavUnlisted>
        <NavLink to={'/vacancies'}>
            <div>
                <ImgBlock className='img'>
                    <img className='img' src={vacancies} height={"80"} alt={"img-vacancies"}></img>
                </ImgBlock>
                    <li>вакансии</li>
            </div>
        </NavLink>
        <NavLink  to={address ? '/my-vacancies' : '/active-vacancies'} >
            <div>
                <ImgBlock className='img'>
                    <img className='img' src={myVacancy} height={"80"} alt={"img-vacancies"}></img>
                </ImgBlock>
                {address ? <li>Мои вакансии</li> : <li>Активные вакансии</li> }
            </div>
        </NavLink>
        {!address  && <NavLink to={'/create-vacancy'}>
            <div>
                <ImgBlock className='img'>
                    <img className='img' src={createVacancy} height={"80"} alt={"img-vacancies"}></img></ImgBlock>
                <li>Создать вакансию</li>
            </div>
        </NavLink>}
        <NavLink  to={'/logout'} onClick={logoutHandler}>
            <div className={"last"}>
                <ImgBlock className='img'>
                    <img className='img' src={logoutImg} height={"80"} alt={"img-vacancies"}></img></ImgBlock>
                <li>Выход</li>
            </div>
        </NavLink>
    </NavUnlisted>
        <div>
        <Outlet />
        </div>
    </GeneralBox>
}

export {Map}