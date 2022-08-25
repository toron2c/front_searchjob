import styled from "styled-components";

const BlockModal = styled.div`
  display: flex;
  flex-direction: row-reverse;
`
const Wind = styled.div`
  height: 40px;
  width: 250px;
  margin: 8px 0 0 0;
  font-size: 13px;
  
  background-color: rgb(231,177,177,0.4);
  border-radius: 12px;
  position: relative;
  :after {
    content: '';
    position: absolute; /* Абсолютное позиционирование */
    right: 20px; top: -20px; /* Положение треугольника */
    border: 10px solid transparent; /* Прозрачные границы */
    border-bottom: 10px solid rgb(231,177,177,0.5);
  }
`


export default function Modal(props) {
    return (<BlockModal>
       <div>
           <Wind>{props.text}</Wind>
       </div>
    </BlockModal>)
}