import React, { useState, useContext } from 'react'

import styles from './AddTodo.module.css'
import { GlobalContext } from '../../context/GlobalContext'
export default function AddTodo () {
	const [ input, setInput ] = useState('')
	const { addTodo } = useContext(GlobalContext)

	const onSubmit = (e) => {
		e.preventDefault()
		if (input !== '') {
			addTodo(input)
			setInput('')
		}
	}

	const handleChange = (e) => {
		setInput(e.target.value)
	}

	return (
		<form onSubmit={onSubmit} className={styles.displayFlex}>
			<input className={styles.input} value={input} onChange={handleChange} />
			<button className={styles.button} type="submit">
				Submit
			</button>
		</form>
	)
}
