import React, { useContext } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { Icon } from '@iconify/react-with-api'

import { GlobalContext } from '../context/GlobalContext'
import TodoItem from './TodoItem'
import { Container, Title, Todos } from './styled/TodoList'

export default function TodoList ({ column }) {
	const { title, id, todosIds, icon } = column
	const { todos } = useContext(GlobalContext)

	const columnTodos = todosIds.map((todoId) => todos[todoId])

	return (
		<Container>
			<Title>
				<h3>{title}</h3>
				<Icon icon={icon} style={{ fontSize: '30px' }} />
			</Title>
			<Droppable droppableId={id}>
				{(provided, snapshot) => {
					return (
						<Todos ref={provided.innerRef} {...provided.droppableProps} isDragginOver={snapshot.isDraggingOver} id={id}>
							{columnTodos.map((todo, index) => {
								return <TodoItem key={todo.id} todo={todo} index={index} columnId={id} />
							})}
							{provided.placeholder}
						</Todos>
					)
				}}
			</Droppable>
		</Container>
	)
}
