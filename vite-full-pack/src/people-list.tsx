import { FC } from 'react'

type PersonListProps = {
	names: {
		first_name: string
		last_name: string
	}[]
}

export const PeopleList: FC<PersonListProps> = ({ names }) => {
	return (
		<div>
			{names.map((name) => {
				return (
					<h2 key={name.first_name}>
						{name.first_name} {name.last_name}
					</h2>
				)
			})}
		</div>
	)
}
