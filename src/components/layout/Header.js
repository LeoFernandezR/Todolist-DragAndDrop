import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
export default function Header () {
	return (
		<header className={styles.header}>
			<h1>TodoList</h1>
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
		</header>
	)
}
