
import styled from "styled-components";
import {Title} from "../Title/Title";
import {Link} from "react-router-dom";

export const TitleHeader = styled.div`
  display: flex;
  justify-content: space-between;
`
export const BlockSignIn = styled.div`
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-end: 0;
  font-weight: bold;
  margin: 30px 10vw 0 0;

`

export const ButtonSignIn = styled(Link)`
  padding: 10px 45px;
  font-size: 30px;
  border: 3px solid #25c00a;
  border-radius: 10px;
  background: #29ab08;
  color: white;
  text-decoration:none;
  height: 20vh;
  :hover {
    background: #fff;
    color: #29ab08;
    border: 3px solid #29ab08;
  }
 
`

export default function StartPage() {
    return (
        <div>
            <Title />
        </div>
    )
}