import styles from './NewTodoForm.module.scss'

interface NewTodoFormProps {
	value: string
	updateText: (str: string) => void
	handleAction: () => void
}

const NewTodoForm: React.FC<NewTodoFormProps> = ({
	value,
	updateText,
	handleAction
}) => {
	return (
		<label>
			<input
				className={styles.input}
				placeholder='Your task'
				value={value}
				onChange={e => updateText(e.target.value)}
			/>
			<button className={styles.add} onClick={handleAction}>
				Add todo
			</button>
		</label>
	)
}

export default NewTodoForm
