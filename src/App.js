import "./App.css"
import styled from "styled-components"
import { Colors } from "./util/Colors"

import NumbersContainer from "./Components/NumbersContainer"
import Footer from './Components/Footer'
import MainContentContainer from "./Components/MainContentContainer"

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
	align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
	background-color: ${Colors.blue};
`

const App = () => {
	return (
		<AppContainer>
			<NumbersContainer />
      <MainContentContainer />
      <Footer />
		</AppContainer>
	)
}

export default App
