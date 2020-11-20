import React, { Component } from 'react'
import PropType from 'prop-types'

import styles from './AddTodo.module.css'

export default class AddTodo extends Component {
	constructor (props) {
		super(props)

		this.state = {
			input : ''
		}
	}
	onSubmit = (e) => {
		e.preventDefault()
		this.props.handleSubmit(this.state.input)
		this.setState({ input: '' })
	}

	handleChange = (e) => {
		this.setState({
			input : e.target.value
		})
	}
	render () {
		return (
			<form onSubmit={this.onSubmit} className={styles.displayFlex}>
				<input className={styles.input} value={this.state.input} onChange={this.handleChange} />
				<button className={styles.button} type="submit">
					Submit
				</button>
			</form>
		)
	}
}

AddTodo.propTypes = {
	handleSubmit : PropType.func.isRequired
}
