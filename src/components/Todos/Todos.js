import React, { useContext, useEffect } from 'react'

import AddTodo from '../AddTodo/AddTodo'
import TodoList from '../TodoList/TodoList'
import styles from './Todos.module.css'
import { GlobalContext } from '../../context/GlobalContext'

export default function Todos () {
	const { todos, getTodos } = useContext(GlobalContext)

	useEffect(() => {
		getTodos()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		<div className={styles.container}>
			<AddTodo />
			<TodoList todos={todos} />
		</div>
	)
}
