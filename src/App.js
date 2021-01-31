import "./App.css"
import styled from "styled-components"
import { Colors } from "./util/Colors"

import NumbersContainer from "./Components/NumbersContainer"
import ComplimentCenter from './Components/ComplimentCenter'
import Footer from './Components/Footer'

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
      <ComplimentCenter />
      <Footer />
		</AppContainer>
	)
}

export default App
