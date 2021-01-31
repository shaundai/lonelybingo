import React from "react"
import styled from "styled-components"
import Emoji from "../util/Emoji"
import { Colors } from "../util/Colors"

const FooterWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 4vh;
	background-color: ${Colors.darkBlue};
	width: 100vw;
	color: ${Colors.offWhite};
`

const Footer = () => {
	return (
		<FooterWrapper>
			Made with <Emoji symbol="❤️" label="red heart"></Emoji> by{" "}
			<a href="http://www.shaundai.com">Shaundai Person</a>
		</FooterWrapper>
	)
}

export default Footer
