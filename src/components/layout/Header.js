import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styled/Header'

export default function Header () {
	const [ navDisplay, setNavDisplay ] = useState(true)

	return (
		<Container>
			<div>
				<h1>TodoList</h1>
				<button
					onClick={() => {
						setNavDisplay(!navDisplay)
					}}
				>
					<span />
					<span />
					<span />
				</button>
			</div>
			<nav id='navbar' className={`${navDisplay && 'hidden'}`}>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
			</nav>
		</Container>
	)
}
