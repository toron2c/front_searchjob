import styled from "styled-components";
import {useSelector} from "react-redux";

const VacancyGradeBox = styled.div`
  margin: 0 40px 10px 30px;
`

export default function VacancyGrade() {
    const position = useSelector(state=> state.vacancy.grade)
    return (<VacancyGradeBox>
        <h3>Позиция:</h3>
        <div>
            {position && position}
        </div>
    </VacancyGradeBox>)
}