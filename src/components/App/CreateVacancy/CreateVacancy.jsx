import styled from "styled-components";
import Tag from "./Tags/Tags";
import VacancyTitle from "./vacancyTitle/vacancyTitle";
import VacancyDescription from "./vacancyDescription/vacancyDescription";
import VacancySelectedField from "./vacancySelectedField/VacancySelectedField";
import VacancySubmit from "./VacancySubmit/VacancySubmit";
import {useSelector} from "react-redux";
import SuccessSendingVacancy from "./SuccesSendingVacancy/SuccessSendingVacancy";

export const Box = styled.div`
  margin: 40px;
  border: 3px solid #29ab08;
  border-radius: 7px;
`

export default function CreateVacancy() {
    const sending = useSelector(state=> state.created.sending);
    return (<Box>
        {!sending && <div>
            <VacancyTitle />
            <VacancyDescription />
            <VacancySelectedField />
            <Tag />
            <VacancySubmit />
        </div>}
        {
            sending && <SuccessSendingVacancy />
        }
            </Box>)
}

