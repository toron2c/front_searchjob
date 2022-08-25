import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import styled from "styled-components";
import {createTag, deleteCurrentTag, getAllTags, inputNewTag} from "../../../../redux/actions";

const BoxTag = styled.div`
  margin: 5px 0 0 10px;
  font-size: 22px;
  color: dimgrey;
  display: flex;
  justify-content: space-between;
`
const FieldTag = styled.div`
  margin: 0 0 30px 10px;
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  font-weight: bold;
`
const TitleTag = styled.div`
  margin-top: 10px;
`
const BoxAddTag = styled.div`
  display: flex;
  margin: 0 15px 0 0;
  flex-direction: column;
`

const InputTag = styled.input`
  border: 2px solid #29ab08;
  font-size: 15px;
  width: 146px;
  height: 16px;
  border-radius: 3px;
  margin: 18px 5px 0 0;
`
const ButtonAddTag = styled.button`
  background: #29ab08;
  font-size: 10px;
  color: #fff;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid #25c00a;
  margin: 8px 0 0 0;
  :hover {
    color: #29ab08;
    background: #fff;
    border: 2px solid #29ab08;
  }
`
const TagDiv = styled.div`
  border: 3px solid #29ab08;
  border-radius: 4px;
  margin: 5px 5px 0;
  padding: 3px;
  color: #fff;
  font-weight: normal;
  background-color: #29ab08;
  position: relative;

  .button {
    cursor:pointer;
    color: #540d0d;
    font-size: 30px;
    display: none;
    position: absolute;
    top: -21px;
    right: -4px;
  }

  :hover {
    .button {
      display: block;
    }
  }
`

export default function Tag() {
    const dispatch = useDispatch();
    const newTag = useSelector(state=> state.tag.newTag);
    const currentTag = useSelector(state=> state.created.tags);
    const onChangeInput = (e) => {
        dispatch(inputNewTag(e.target.value));
    }
    useEffect(()=>{
        dispatch(getAllTags());
    }, []);
    const deleteTag = (id) => {
        dispatch(deleteCurrentTag(id));
    }
    const tags = useSelector(state=>state.tag.tags);
    const tagList = currentTag.map((el, idx) => <TagDiv key={idx}>{el.name}<div onClick={()=> deleteTag(el.id)} className={"button"}>×</div></TagDiv>)
    let optionList = tags.map((el,idx) => <option value={el.name} key={idx} />);
    const submitNewTag = (e) => {
        e.preventDefault();
        dispatch(createTag(newTag, tags));
    }
    return (<div>

                <BoxTag>
                    <TitleTag>Ключевые навыки:</TitleTag>
                <BoxAddTag>
                    <InputTag onChange={onChangeInput} value={newTag} list="colors-list"/>
                    <datalist id="colors-list">
                        {tags && optionList}
                    </datalist>
                    <div> <ButtonAddTag onClick={submitNewTag}>Добавить новый навык</ButtonAddTag></div>
                </BoxAddTag>
                </BoxTag>
                <FieldTag>
                    {currentTag && tagList}
                </FieldTag>
    </div>)
}