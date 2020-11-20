import React, { Component } from 'react'
import Todos from './components/Todos/Todos'
import Axios from 'axios'
import Header from './components/layout/Header'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/pages/About'

import './App.css'

class App extends Component {
	constructor (props) {
		super(props)
		this.state = {
			todos : []
		}
	}
	componentDidMount () {
		Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=30')
			.then((res) => {
				const filteredResponse = res.data.filter((element) => {
					return element.completed === false
				})
				this.setState({
					todos : [ ...this.state.todos, ...filteredResponse ]
				})
			})
			.catch((err) => {
				console.error(err)
			})
	}

	handleClick = (id) => {
		this.setState({
			todos : this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed
				}
				return todo
			})
		})
	}
	deleteClick = (id) => {
		Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then((res) => {
				this.setState({
					todos : this.state.todos.filter((todo) => todo.id !== id)
				})
			})
			.catch((err) => {
				console.error(err)
			})
	}
	handleSubmit = (title) => {
		Axios.post('https://jsonplaceholder.typicode.com/todos', {
			title,
			completed : false
		})
			.then((res) => {
				this.setState({
					todos : [ ...this.state.todos, res.data ]
				})
			})
			.catch((err) => {
				console.error(err)
			})
	}
	render () {
		return (
			<Router>
				<div className="App">
					<Header />
					<Route
						exact
						path="/"
						render={(props) => (
							<Todos
								todos={this.state.todos}
								handleClick={this.handleClick}
								deleteClick={this.deleteClick}
								handleSubmit={this.handleSubmit}
							/>
						)}
					/>
					<Route path="/about" component={About} />
				</div>
			</Router>
		)
	}
}

export default App
