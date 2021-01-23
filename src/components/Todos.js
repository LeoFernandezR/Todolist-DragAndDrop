import React, { useContext } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

import { Container, Columns } from './styled/Todos'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import { GlobalContext } from '../context/GlobalContext'

export default function Todos () {
	const { columns, columnIds, onDragEnd } = useContext(GlobalContext)

	return (
		<Container>
			<AddTodo />
			<DragDropContext onDragEnd={onDragEnd}>
				<Columns>
					{columnIds.map((columnId) => {
						return <TodoList key={columnId} column={columns[columnId]} />
					})}
				</Columns>
			</DragDropContext>
		</Container>
	)
}
