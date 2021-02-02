import React from 'react'
import styled from 'styled-components'
import { Colors } from '../util/Colors'
import Compliments from '../util/compliments.json'

const randomCompliment = Compliments[Math.floor(Math.random() * Compliments.length)]

const ComplimentWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
font-size: .8em;
color: ${Colors.darkBlue};
width: 23vw;
height: 10vh;
border-radius: 5px;
background-color: ${Colors.lightBlue};
border: 1px solid ${Colors.darkBlue};
`

const ComplimentCenter = () => {
    return (
      <ComplimentWrapper>
        <div>
          <em>{randomCompliment}</em>
        </div>
      </ComplimentWrapper>
    )
}

export default ComplimentCenter