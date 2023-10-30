import { FC } from 'react'
import { useForm } from 'react-hook-form'
import styles from './addTask.module.css'

type AddTaskProps = {
	onAddTask: (title: string) => void
}

export const AddTask: FC<AddTaskProps> = ({ onAddTask }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<{ taskTitle: string }>({
		mode: 'onChange',
	})

	const onSubmit = (data: { taskTitle: string }) => {
		onAddTask(data.taskTitle)
		reset()
	}

	return (
		<div className={styles.wrapper}>
			<h3>Add task</h3>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					{...register('taskTitle', {
						required: 'task title is required',
					})}
					placeholder="add task"
				/>
				{errors?.taskTitle?.message && (
					<span style={{ color: 'red' }}>write smth here!</span>
				)}
				<button type="submit">Add</button>
				<button
					className={styles.cancel}
					type="button"
					onClick={() => reset()}
				>
					X
				</button>
			</form>
		</div>
	)
}
