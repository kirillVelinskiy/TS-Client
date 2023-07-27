import { useState } from 'react'
import { useAppDispatch } from './hooks/hook'
import Layout from './components/layout/Layout'
import { addTodo } from './store/todoSlice'
import NewTodoForm from './components/todo/new-todo-form/NewTodoForm'
import TodoList from './components/todo/todo-list/TodoList'

function App() {
	const [text, setText] = useState('')
	const dispatch = useAppDispatch()

	const handleAction = () => {
		if (text.trim().length) {
			dispatch(addTodo(text))
			setText('')
		}
	}

	return (
		<Layout>
			<NewTodoForm
				value={text}
				updateText={setText}
				handleAction={handleAction}
			/>
			<TodoList />
		</Layout>
	)
}

export default App
