
const completedStyle = {
  fontStyle: "italic",
  color: '#cdcdcd',
  textDecoration: 'line-trought'
}
const ToDoItem = props =>

  <div className='todo-item'>
    <input
      type="checkbox"
      checked={props.item.completed}
      onChange={() => props.handleChange(props.item.id)}
    />
    <p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
  </div>




export default ToDoItem;