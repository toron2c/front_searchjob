import {useSelector} from "react-redux";
import styled from "styled-components";

const BoxEnglish = styled.div`
  margin: 0 20px 10px 30px;
`

export function VacancyEnglishLvl() {

    const englishLvl = useSelector(state=> {
        return state.vacancy.englishLvl
    })

    return (<BoxEnglish>
        <h3>Уровень английского:</h3>
        <div>
            {englishLvl && englishLvl}
        </div>
    </BoxEnglish>)
}