import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Todos from './components/Todos/Todos'
import Header from './components/layout/Header'
import About from './components/pages/About'
import { GlobalProvider } from './context/GlobalContext'
import './App.css'

export default function App () {
	return (
		<GlobalProvider>
			<Router>
				<Header />
				<Route exact path="/" component={Todos} />
				<Route path="/about" component={About} />
			</Router>
		</GlobalProvider>
	)
}
