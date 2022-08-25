import {useSelector} from "react-redux";
import styled from "styled-components";

const VacancyTitleH1 = styled.h1`
  margin: 30px 20px 15px 50px;
`

export default function VacancyTitle() {

    const TitleVacancy = useSelector(state=> state.vacancy.title);

    return (<VacancyTitleH1>
        {TitleVacancy && TitleVacancy}
    </VacancyTitleH1>)
}