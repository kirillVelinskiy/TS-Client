import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type typeTodo = {
	id: string
	title: string
	completed: boolean
}

type typeTodosState = {
	list: typeTodo[]
}

const initialState: typeTodosState = {
	list: []
}

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo(state, action: PayloadAction<string>) {
			state.list.push({
				id: new Date().toISOString(),
				title: action.payload,
				completed: false
			})
		},

		removeTodo(state, action: PayloadAction<string>) {
			state.list = state.list.filter(todo => todo.id !== action.payload)
		}
	}
})

export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer
