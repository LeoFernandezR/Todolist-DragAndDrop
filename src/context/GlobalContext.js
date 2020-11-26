import React, { createContext, useReducer } from 'react'
import axios from 'axios'

import AppReducer from './AppReducer'

const initialState = {
	todos : []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
	const [ state, dispatch ] = useReducer(AppReducer, initialState)

	//Actions
	const getTodos = async () => {
		try {
			const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')

			dispatch({
				type    : 'GET_TODOS',
				payload : res.data
			})
		} catch (error) {
			dispatch({
				type    : 'GET_ERROR',
				payload : error
			})
		}
	}
	const deleteTodo = async (id) => {
		await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

		dispatch({
			type    : 'DELETE_TODO',
			payload : id
		})
	}
	const toggleTodo = (id) => {
		dispatch({
			type    : 'TOGGLE_TODO',
			payload : id
		})
	}
	const addTodo = async (title) => {
		const newTodo = await axios.post('https://jsonplaceholder.typicode.com/todos', {
			title,
			completed : false
		})

		dispatch({
			type    : 'ADD_TODO',
			payload : newTodo.data
		})
	}

	return (
		<GlobalContext.Provider value={{ todos: state.todos, deleteTodo, toggleTodo, addTodo, getTodos }}>
			{children}
		</GlobalContext.Provider>
	)
}
