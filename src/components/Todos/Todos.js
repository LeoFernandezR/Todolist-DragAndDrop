import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AddTodo from '../AddTodo/AddTodo'
import TodoItem from '../TodoItem/TodoItem'
import styles from './Todos.module.css'

class Todos extends Component {
	render () {
		return (
			<div className={styles.container}>
				<AddTodo handleSubmit={this.props.handleSubmit} />
				<ul>
					<TodoItem
						todos={this.props.todos}
						handleClick={this.props.handleClick}
						deleteClick={this.props.deleteClick}
					/>
				</ul>
			</div>
		)
	}
}

Todos.propTypes = {
	handleSubmit : PropTypes.func.isRequired,
	todos        : PropTypes.array.isRequired,
	handleClick  : PropTypes.func.isRequired,
	deleteClick  : PropTypes.func.isRequired
}

export default Todos
