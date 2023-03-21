import React from "react"
import "./style/index.scss"
import { Login } from "./components/Login"
import UseGlobalStore from "./store/GlobalStore"
import { Home } from "./components/Home"


function App() {
	const isAuthenticated = UseGlobalStore(state => state.isAuthenticated)

	return <>
			{isAuthenticated ?
				<Home />
				:
				<Login></Login>
			}
	</>
}

export default App
