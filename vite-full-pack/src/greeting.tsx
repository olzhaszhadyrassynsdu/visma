import { FC } from 'react'

type GreetingProps = {
	name: string
	messageCount: number
	isLoggedIn: boolean
}
export const Greeting: FC<GreetingProps> = (props) => {
	return (
		<div>
			<p>
				hello {props.name}! you have {props.messageCount} messages.
			</p>
			{props.isLoggedIn ? (
				<p>youare logged in</p>
			) : (
				<p>you are not logged in</p>
			)}
		</div>
	)
}
