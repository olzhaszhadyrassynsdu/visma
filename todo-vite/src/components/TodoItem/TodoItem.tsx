import styles from './TodoItem.module.css'
import { useState, useRef, FC } from 'react'

type TodoItemProps = {
	value: string
	deleteTask: () => void
	editTask: (changedTitle: string) => void
	onDone: () => void
}

export const TodoItem: FC<TodoItemProps> = ({
	value,
	deleteTask,
	editTask,
	onDone,
}) => {
	const [editable, setEditable] = useState(false)
	const [prevValue, setPrevValue] = useState('')

	const titleRef = useRef<HTMLInputElement | null>(null)

	const onEdit = () => {
		const title = titleRef.current?.value ?? ''
		setPrevValue(title)
		setEditable(true)
		titleRef.current?.focus()
	}

	const onSave = () => {
		const changedTitle = titleRef.current?.value ?? ''
		editTask(changedTitle)
		setEditable(false)
	}

	const onCancel = () => {
		setEditable(false)
		if (titleRef.current) titleRef.current.value = prevValue
	}

	return (
		<div className={styles.wrapper}>
			<ul>
				<li>
					<input
						disabled={!editable}
						defaultValue={value}
						ref={titleRef}
						name="todo_item[]"
					/>
					{editable ? (
						<>
							<button onClick={onCancel}>Cancel</button>
							<button onClick={onSave}>Save</button>
						</>
					) : (
						<>
							<button onClick={deleteTask}>X</button>
							<button onClick={onEdit}>Edit</button>
							<button onClick={onDone}>Done</button>
						</>
					)}
				</li>
			</ul>
		</div>
	)
}
