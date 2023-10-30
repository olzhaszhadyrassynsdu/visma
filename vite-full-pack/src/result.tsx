import { FC } from 'react'

type ResultProps = {
	text: string
}
export const Result: FC<ResultProps> = (props) => {
	return <p>{props.text}</p>
}
