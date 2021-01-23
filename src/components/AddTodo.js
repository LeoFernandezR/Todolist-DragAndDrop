import React, { useState, useContext } from 'react'

import { AddTodoForm, SubmitButton, TodoInput } from './styled/AddTodo'
import { GlobalContext } from '../context/GlobalContext'

export default function AddTodo () {
	const [ input, setInput ] = useState('')
	const { addTodo, todos } = useContext(GlobalContext)
	const id = `todo-${Object.keys(todos).length + 1}`
	const onSubmit = (e) => {
		e.preventDefault()
		if (input !== '') {
			addTodo(input, id)
			setInput('')
		}
	}

	const handleChange = (e) => {
		setInput(e.target.value)
	}

	return (
		<AddTodoForm onSubmit={onSubmit}>
			<TodoInput value={input} onChange={handleChange} />
			<SubmitButton type='submit'>Submit</SubmitButton>
		</AddTodoForm>
	)
}
