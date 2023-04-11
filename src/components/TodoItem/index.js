// Write your code here
import './index.css'

const TodoItem = props => {
  const {all} = props
  const {title} = all

  return (
    <div className="title">
      <h1>{title}</h1>
      <button type="button" className="button">
        Delete
      </button>
    </div>
  )
}
export default TodoItem
