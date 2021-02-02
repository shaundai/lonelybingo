import React from 'react'
import styled from 'styled-components'
import { Colors } from '../util/Colors'
import Compliments from '../util/compliments.json'

const randomCompliment = Compliments[Math.floor(Math.random() * Compliments.length)]

const ComplimentWrapper = styled.div`
display: flex;
justify-content: center;
width: 25vw;
background-color: ${Colors.blue};
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