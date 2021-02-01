import React from "react"
import styled from "styled-components"
import Grid from 'react-css-grid'

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

const BoardWrapper = styled.div`
display: grid;
height: 50px;
`

const Footer = () => {
	return (
		<BingoWrapper>
      <BoardWrapper>
      <Grid
        width={600}
        gap={24}>
        <div>Column</div>
        <div>Column</div>
        <div>Column</div>
        <div>Column</div>
        <div>Column</div>
        <div>Column</div>
        <div>Column</div>
        <div>Column</div>
        <div>Column</div>
        <div>Column</div>
        <div>Column</div>
        <div>Column</div>
        <div>Column</div>
        <div>Column</div>
        <div>Column</div>
        <div>Column</div>
        <div>Column</div>
        <div>Column</div>
        <div>Column</div>
        <div>Column</div>
        <div>Column</div>
        <div>Column</div>
        <div>Column</div>
        <div>Column</div>
        <div>Column</div>
        <div>Column</div>
        <div>Column</div>
        <div>Column</div>
      </Grid>
      </BoardWrapper>
		</BingoWrapper>
	)
}

export default Footer
