import React, { useContext } from 'react'
import { Draggable } from 'react-beautiful-dnd'

import { DeleteButton, Todo } from './styled/TodoItem'
import { GlobalContext } from '../context/GlobalContext'

export default function TodoItem ({ todo, index, columnId }) {
	const { deleteTodo } = useContext(GlobalContext)
	return (
		<Draggable draggableId={todo.id} index={index}>
			{(provided) => {
				return (
					<Todo {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
						<p style={todo.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }} key={todo.id}>
							{todo.content}
						</p>
						<DeleteButton onClick={() => deleteTodo(todo.id, columnId)}>{'x'}</DeleteButton>
					</Todo>
				)
			}}
		</Draggable>
	)
}
