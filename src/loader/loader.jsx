import {Audio} from "react-loader-spinner";
import styled from "styled-components";

const Box = styled.div`
  margin-top: -27px;
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: rgba(0,0,0,0.6);
`

const Element = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 6em;
`

export default function Loader() {
    return <Box>
        <Element>
            <Audio
                height = "100"
                width = "200"
                radius = "50"
                color = 'green'
                ariaLabel = 'three-dots-loading'

            />
        </Element>
    </Box>
}