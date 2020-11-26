export default function AppReducer (state, action) {
	switch (action.type) {
		case 'DELETE_TODO':
			return {
				...state,
				todos : state.todos.filter((todo) => todo.id !== action.payload)
			}
		case 'TOGGLE_TODO':
			return {
				...state,
				todos : state.todos.map((todo) => {
					if (todo.id === action.payload) {
						return { ...todo, completed: !todo.completed }
					}
					return todo
				})
			}
		case 'ADD_TODO':
			return {
				...state,
				todos : [ ...state.todos, action.payload ]
			}
		case 'GET_TODOS':
			return {
				...state,
				todos : action.payload
			}
		default:
			return state
	}
}
