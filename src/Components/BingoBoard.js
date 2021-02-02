import React from "react"
import styled from "styled-components"
import Grid from "react-css-grid"
import BingoNumbers from "../util/bingoNumbers.json"

import { Colors } from "../util/Colors"

const BingoWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: auto;
	background-color: ${Colors.darkBlue};
	width: 100vw;
	color: ${Colors.offWhite};
`

const GridCell = styled.div`
width: 8vw;
height: 8vw;
background-color: ${Colors.gray}
`

const BoardWrapper = styled.div`
	display: grid;
	height: 50px;
`

const createGridContent = () => {
	return BingoNumbers[0].Numbers.map(number => {
		return number
	})
}

const createGridCells = () => {
  return <GridCell>Blank cell</GridCell>
}

const Footer = () => {
	return (
		<BingoWrapper>
			<BoardWrapper>
				<Grid width={600} gap={24}>
					{createGridCells()}
				</Grid>
			</BoardWrapper>
		</BingoWrapper>
	)
}

export default Footer
