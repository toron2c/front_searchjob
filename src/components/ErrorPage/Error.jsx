
import styled from "styled-components";
import {Link} from "react-router-dom";

const Box = styled.div`
  margin-top: 15%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const Title = styled.h1`
    margin-left: auto;
    margin-right: auto;
    
`

const ButtonBlock = styled.div`
  
`

const Button = styled(Link)`
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
`

export default function Error() {
    return <div>
        <Box>
            <Title>404 Page not found</Title>
            <ButtonBlock>
                <Button to={'/'}>Вернуться на главную</Button>
            </ButtonBlock>
        </Box>
    </div>
}