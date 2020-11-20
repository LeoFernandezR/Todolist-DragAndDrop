import React from 'react'
import PropType from 'prop-types'

import styles from './TodoItem.module.css'

export default function TodoItem ({ todos, handleClick, deleteClick }) {
	return todos.map((element) => {
		return (
			<li className={`${styles.displayFlex} ${styles.li}`} key={element.id}>
				<div className={styles.divFlex}>
					<input className={styles.input} type="checkbox" onClick={handleClick.bind(null, element.id)} />
					<p
						style={element.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}
						key={element.id}
					>
						{element.title}
					</p>
				</div>
				<button className={styles.delete} onClick={deleteClick.bind(null, element.id)}>
					{'X'}
				</button>
			</li>
		)
	})
}

TodoItem.propTypes = {
	todos       : PropType.array.isRequired,
	handleClick : PropType.func.isRequired,
	deleteClick : PropType.func.isRequired
}
