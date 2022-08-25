import styled from "styled-components";
import {useSelector} from "react-redux";

const Description = styled.div`
  margin: 0 20px 10px 20px;
  text-align: left;
`

export default function VacancyDescription() {
    const Text = useSelector(state=> state.vacancy.description)
    return (<Description>
        {Text && Text}
    </Description>)
}