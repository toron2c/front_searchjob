import styled from "styled-components";
import {useSelector} from "react-redux";

const VacancyTagsBox = styled.div`
  margin: 0 20px 10px 30px;
  display: flex;
  flex-wrap: wrap;
`
const VacancyTagBlock = styled.div`
  margin: 5px;
  background: #29ab08;
  padding: 5px;
  border-radius: 4px;
  color: #fff;
`
const VacancyTitleTag = styled.p`
  margin: 15px 20px 10px 30px;
  font-weight: bold;
`

export default function VacancyTags() {

    const Tags = useSelector(state=> state.vacancy.tags)

    const listTags = Tags.map((el, idx) => { return <VacancyTagBlock key={`${idx}tag`}>{el}</VacancyTagBlock>});

    return (<div>
        <VacancyTitleTag>Ключевые навыки:</VacancyTitleTag>
        <VacancyTagsBox>
            {listTags && listTags}
        </VacancyTagsBox>
    </div>)
}