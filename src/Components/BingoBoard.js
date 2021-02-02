import React from "react"
import styled from "styled-components"
import Grid from "react-css-grid"
import BingoNumbers from "../util/bingoNumbers.json"

import { Colors } from "../util/Colors"

const BingoWrapper = styled.div`
	display: flex;
	justify-content: center;
  align-items: center;
  background-color: ${Colors.darkBlue};
  color: ${Colors.offWhite};
  border: 1px solid ${Colors.gray};
`

const GridCell = styled.div`
width: 8vw;
height: 8vw;
background-color: ${Colors.gray};
text-align: center;
display: flex;
justify-content: center;
align-items: center;
font-size: 3em;
`

const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, calc(8vw));
  grid-template-rows: repeat(5, calc(8vw + 2px));
`

const generateRandomBingoNumbers = () => {
  const shuffled = BingoNumbers[0].Numbers.sort(() => 0.5 - Math.random());
  const selectedFive = shuffled.slice(0, 5)
  return selectedFive
}

const createGridContent = () => {
	return generateRandomBingoNumbers().map(number => {
		return <GridCell>{number}</GridCell>
	})
}

const Footer = () => {
	return (
		<BingoWrapper>
			<BoardWrapper>
				<Grid width={600} gap={2}>
					{createGridContent()}
				</Grid>
			</BoardWrapper>
		</BingoWrapper>
	)
}

export default Footer
