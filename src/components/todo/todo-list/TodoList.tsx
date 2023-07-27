import { useAppSelector } from '../../../hooks/hook'
import TodoItem from '../todo-item/TodoItem'
import styles from './TodoList.module.scss'

const TodoList: React.FC = () => {
	const todos = useAppSelector(state => state.todos.list)

	return (
		<ul className={styles.list}>
			{todos.map(todo => (
				<TodoItem key={todo.id} {...todo} />
			))}
		</ul>
	)
}

export default TodoList
