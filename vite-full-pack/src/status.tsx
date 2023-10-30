type StatusProps = {
    status: 'success' | 'error'
    children: React.ReactNode | string
}
export const Status = (props:StatusProps) => {
  return (
    <div>
        {
          props.status === 'success' ? <p>success</p> : <p>error</p>
        }

        <p>{props.children}</p>
    </div>
  )
}
