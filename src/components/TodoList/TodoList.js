import React, { useContext } from 'react'
import PropType from 'prop-types'

import styles from './TodoList.module.css'
import { GlobalContext } from '../../context/GlobalContext'

export default function TodoList ({ todos }) {
	const { deleteTodo, toggleTodo } = useContext(GlobalContext)

	return (
		<ul>
			{todos.map((todo) => {
				return (
					<li className={`${styles.displayFlex} ${styles.li}`} key={todo.id}>
						<div className={styles.divFlex}>
							<input
								className={styles.input}
								type="checkbox"
								checked={todo.completed}
								onChange={() => {
									toggleTodo(todo.id)
								}}
							/>
							<p style={todo.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }} key={todo.id}>
								{todo.title}
							</p>
						</div>
						<button className={styles.delete} onClick={() => deleteTodo(todo.id)}>
							{'X'}
						</button>
					</li>
				)
			})}
		</ul>
	)
}

TodoList.propTypes = {
	todos : PropType.array.isRequired
}
