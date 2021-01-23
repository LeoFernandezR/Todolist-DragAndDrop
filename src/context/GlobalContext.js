import React, { createContext, useReducer } from 'react'

import AppReducer from './AppReducer'

const initialState = {
	todos     : {
		'todo-1' : {
			id        : 'todo-1',
			content   : 'Take out the garbage',
			completed : false
		},
		'todo-2' : {
			id        : 'todo-2',
			content   : 'Watch my favorite show',
			completed : false
		},
		'todo-3' : {
			id        : 'todo-3',
			content   : 'Charge my phone',
			completed : false
		},
		'todo-4' : {
			id        : 'todo-4',
			content   : 'Cook dinner',
			completed : false
		},
		'todo-5' : {
			id        : 'todo-5',
			content   : 'Walk the dog',
			completed : false
		}
	},
	columns   : {
		'column-1' : {
			id       : 'column-1',
			title    : 'To Do',
			icon     : 'openmoji:memo',
			todosIds : [ 'todo-1', 'todo-2', 'todo-3', 'todo-4', 'todo-5' ]
		},
		'column-2' : {
			id       : 'column-2',
			title    : 'On Progress',
			icon     : 'openmoji:roller-coaster',
			todosIds : []
		},
		'column-3' : {
			id       : 'column-3',
			title    : 'Done',
			icon     : 'openmoji:check-mark-button',
			todosIds : []
		}
	},
	columnIds : [ 'column-1', 'column-2', 'column-3' ]
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
	const [ state, dispatch ] = useReducer(AppReducer, initialState)

	const onDragEnd = ({ destination, source, draggableId }) => {
		if (!destination) return
		if (destination.droppableId === source.droppableId && destination.index === source.index) return

		dispatch({
			type    : 'MOVE_TODO',
			payload : {
				destination,
				source,
				draggableId
			}
		})
	}
	const deleteTodo = (todoId, columnId) => {
		dispatch({
			type    : 'DELETE_TODO',
			payload : {
				todoId,
				columnId
			}
		})
	}
	const addTodo = (content, id) => {
		dispatch({
			type    : 'ADD_TODO',
			payload : {
				id,
				content,
				completed : false
			}
		})
	}
	return (
		<GlobalContext.Provider
			value={{
				todos      : state.todos,
				columns    : state.columns,
				columnIds  : state.columnIds,
				deleteTodo,
				addTodo,
				onDragEnd
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}
