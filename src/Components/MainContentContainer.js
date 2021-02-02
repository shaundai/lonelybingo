import React from "react"
import styled from "styled-components"
import BingoBoard from "./BingoBoard"
import ComplimentCenter from "./ComplimentCenter"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const MainContentContainer = () => {
	return (
		<Wrapper>
			<BingoBoard />
			<ComplimentCenter />
		</Wrapper>
	)
}

export default MainContentContainer
