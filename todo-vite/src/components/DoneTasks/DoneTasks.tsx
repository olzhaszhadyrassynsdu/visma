import { FC } from 'react'

type DoneTasksProps = {
	value: string
}

export const DoneTasks: FC<DoneTasksProps> = ({ value }) => {
	return (
		<div>
			<p>{value}</p>
		</div>
	)
}
