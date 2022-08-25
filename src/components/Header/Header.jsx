import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Head = styled.div`
  margin: 0 0 0 10vw;
  cursor: pointer;
`;
const Title = styled.h1`
  color: #29ab08;
  font-size: 40px;
`

export default function Header() {
    const Navigate = useNavigate();
    const GeneralClick = (e) => {
        Navigate('/');
    }
    return (
        <Head onClick={GeneralClick}>
            <Title> Search Job </Title>
        </Head>
    )
}