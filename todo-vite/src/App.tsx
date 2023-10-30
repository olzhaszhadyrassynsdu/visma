import { AddTask } from './components/addTask/AddTask'
import { TodoItem } from './components/TodoItem/TodoItem'
import styles from './main.module.css'
import { useState, Suspense } from 'react'
import { DoneTasks } from './components/DoneTasks/DoneTasks'
import { useTranslation } from 'react-i18next'

type Locale = {
	title: string
}

const locales: { [key: string]: Locale } = {
	en: { title: 'English' },
	ru: { title: 'Russian' },
}

export function App() {
	const { t, i18n } = useTranslation()
	const [todos, setTodos] = useState<string[]>([])

	const [done, setDone] = useState<string[]>([])

	const addTodoItem = (title: string) => {
		setTodos([...todos, title])
	}

	const deleteTask = (idx: number) => {
		const newList = todos.filter((_, i) => i !== idx)
		setTodos(newList)
	}

	const editTask = (idx: number) => (changedTitle: string) => {
		const newList = [...todos]
		newList[idx] = changedTitle
		setTodos(newList)
	}

	const onDone = (idx: number) => {
		const doneList = [...done, todos[idx]]
		setDone(doneList)
		deleteTask(idx)
	}

	return (
		<>
			<Suspense fallback="loading">
				<ul>
					<>
						{Object.keys(locales).map((locale) => (
							<li key={locale}>
								<button
									type="submit"
									onClick={() => i18n.changeLanguage(locale)}
								>
									{locales[locale].title}
								</button>
							</li>
						))}
					</>
				</ul>
				<div className={styles.wrapper}>
					<h1>{t('main.header')}</h1>
					<AddTask onAddTask={addTodoItem} />
					<div className={styles.todo}>
						<h3>To Do</h3>
						{todos.map((item, idx) => (
							<TodoItem
								key={`${item}-${idx}`}
								value={item}
								deleteTask={() => deleteTask(idx)}
								editTask={editTask(idx)}
								onDone={() => onDone(idx)}
							/>
						))}
					</div>
					{done.length > 0 && (
						<div className={styles.done}>
							<h3>Done tasks</h3>
							{done.map((item, idx) => (
								<DoneTasks
									key={`${item}-${idx}`}
									value={item}
								/>
							))}
						</div>
					)}
				</div>
			</Suspense>
		</>
	)
}
