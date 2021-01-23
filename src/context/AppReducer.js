export default function AppReducer (state, action) {
	switch (action.type) {
		case 'DELETE_TODO':
			return {
				...state,
				todos   : {
					...state.todos,
					[action.payload.todoId]: undefined
				},
				columns : {
					...state.columns,
					[action.payload.columnId]: {
						...state.columns[action.payload.columnId],
						todosIds : state.columns[action.payload.columnId].todosIds.filter((id) => id !== action.payload.todoId)
					}
				}
			}
		case 'ADD_TODO':
			return {
				...state,
				todos   : {
					...state.todos,
					[action.payload.id]: {
						...action.payload
					}
				},
				columns : {
					...state.columns,
					'column-1' : {
						...state.columns['column-1'],
						todosIds : [ ...state.columns['column-1'].todosIds, action.payload.id ]
					}
				}
			}
		case 'MOVE_TODO':
			const { destination, source, draggableId } = action.payload
			const start = state.columns[source.droppableId]
			const finish = state.columns[destination.droppableId]
			const startTodosIds = [ ...start.todosIds ]
			const finishTodosIds = [ ...finish.todosIds ]
			if (start === finish) {
				startTodosIds.splice(source.index, 1)
				startTodosIds.splice(destination.index, 0, draggableId)
				return {
					...state,
					columns : {
						...state.columns,
						[start.id]: {
							...state.columns[start.id],
							todosIds : startTodosIds
						}
					}
				}
			} else if (destination.droppableId === 'column-3') {
				startTodosIds.splice(source.index, 1)
				finishTodosIds.splice(destination.index, 0, draggableId)
				return {
					...state,
					columns : {
						...state.columns,
						[start.id]: {
							...state.columns[start.id],
							todosIds : startTodosIds
						},

						[finish.id]: {
							...state.columns[finish.id],
							todosIds : finishTodosIds
						}
					},
					todos   : {
						...state.todos,
						[draggableId] : {
							...state.todos[draggableId],
							completed : true
						}
					}
				}
			} else {
				startTodosIds.splice(source.index, 1)
				finishTodosIds.splice(destination.index, 0, draggableId)
				return {
					...state,
					columns : {
						...state.columns,
						[start.id]: {
							...state.columns[start.id],
							todosIds : startTodosIds
						},

						[finish.id]: {
							...state.columns[finish.id],
							todosIds : finishTodosIds
						}
					},
					todos   : {
						...state.todos,
						[draggableId] : {
							...state.todos[draggableId],
							completed : false
						}
					}
				}
			}

		default:
			return state
	}
}
