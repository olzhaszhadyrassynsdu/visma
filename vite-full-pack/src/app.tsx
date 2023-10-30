import { Greeting } from './greeting'
import { PeopleList } from './people-list'
import { Status } from './status'
import { Result } from './result'

const PersonList = [
	{
		first_name: 'abbs',
		last_name: 'bbb',
	},
	{
		first_name: 'abbs',
		last_name: 'bbb',
	},
	{
		first_name: 'abbs',
		last_name: 'bbb',
	},
]

export function App() {
	return (
		<div>
			<Greeting name={'Olzhas'} messageCount={12} isLoggedIn={false} />
			<PeopleList names={PersonList} />
			<Status status="success">
				some new text
				<Result text="new text" />
			</Status>
		</div>
	)
}
