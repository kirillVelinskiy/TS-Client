import { useAppDispatch } from '../../../hooks/hook'
import { removeTodo } from '../../../store/todoSlice'
import { AiFillHeart, AiOutlineDelete, AiOutlineHeart } from 'react-icons/ai'
import styles from './TodoItem.module.scss'
import { useState } from 'react'

interface TodoItemProps {
	id: string
	title: string
	completed: boolean
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title }) => {
	const dispatch = useAppDispatch()
	const [isFavorites, setIsFavorites] = useState(false)

	return (
		<li className={styles.item}>
			<div className={styles.link}>
				<span onClick={() => setIsFavorites(!isFavorites)}>
					{isFavorites ? <AiFillHeart fill={'#F31559'} /> : <AiOutlineHeart />}
				</span>
				<span onClick={() => dispatch(removeTodo(id))}>
					<AiOutlineDelete />
				</span>
			</div>
			<span className={styles.title}>{title}</span>
		</li>
	)
}

export default TodoItem
