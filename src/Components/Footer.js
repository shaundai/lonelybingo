import React from "react"
import styled from "styled-components"
import Emoji from "../util/Emoji"
import { Colors } from "../util/Colors"

const FooterWrapper = styled.div`
	position: fixed;
	bottom: 0;
	height: 6vh;
	width: 100vw;
  color: ${Colors.offWhite};
  display: flex;
	justify-content: center;
	align-items: center;
`

const LinkSpacing = styled.span`
margin: 0 4px;
`

const Footer = () => {
	return (
		<FooterWrapper>
				Made with <LinkSpacing><Emoji symbol="❤️" label="red heart" /></LinkSpacing> by
				<LinkSpacing>
					<a href="http://www.shaundai.com">Shaundai Person</a>
				</LinkSpacing>
		</FooterWrapper>
	)
}

export default Footer
