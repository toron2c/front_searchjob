import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {setEnglishLvl, setGrade} from "../../../../redux/actions";

const BoxSelectedField = styled.div`
  margin: 10px;
  font-size: 22px;
  color: dimgrey;
`
const Select = styled.select`
  font-size: 20px;
  border: 3px solid #29ab08;
  border-radius: 4px;
`


export default function VacancySelectedField() {
    const dispatch = useDispatch();
    const EnglishLvl = useSelector(state=> state.created.englishLvl);
    const listEnglish = EnglishLvl.map((el,idx)=> <option value={el} key={idx}>{el}</option>)
    const englishLvlValue = useSelector(state=> state.created.currentEnglishLvl);
    const onChangeEnglish = (e) => {
        e.preventDefault();
        dispatch(setEnglishLvl(e.target.value))
    }


    const Positions = useSelector(state=> state.created.grade);
    const listPosition = Positions.map((el, idx)=> <option value={el} key={Positions.length + idx}>{el}</option>)
    const gradeValue = useSelector(state=> state.created.currentGrade);
    const onChangeGrade = (e) => {
        e.preventDefault();
       dispatch(setGrade(e.target.value));
    }

    return <BoxSelectedField>
           <div>
               Уровень английского:
               <div>
                   <Select value={englishLvlValue}  onChange={onChangeEnglish}>
                       <option disabled selected value={''}>Выберете уровень</option>
                       {EnglishLvl && listEnglish}
                   </Select>

               </div>
           </div>
        <div>
            Позиция:
            <div>
                <Select value={gradeValue} onChange={onChangeGrade}>
                    <option disabled selected value={''}>Выберете позицию</option>
                    {Positions && listPosition}
                </Select>
            </div>
        </div>
    </BoxSelectedField>
}