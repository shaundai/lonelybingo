import React from "react"
import styled from "styled-components"
import Emoji from '../util/Emoji'
import { Colors } from "../util/Colors"

const FooterWrapper = styled.div`
	height: 4vh;
	background-color: ${Colors.blue};
`

const EmojiHeart = props => (
  <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
  >
      {props.symbol}
  </span>
);

const Footer = () => {
	return <FooterWrapper>Made with <Emoji src="https://unicode.org/emoji/charts/full-emoji-list.html#1f48b" label="heart"></Emoji>love by Shaundai Person</FooterWrapper>
}

export default Footer
