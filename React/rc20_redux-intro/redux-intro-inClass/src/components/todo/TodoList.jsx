import TodoItem from "./TodoItem"
import { useSelector } from "react-redux"

const TodoList = () => {
  //? *todlistin consume edilmesi
  const todoList = useSelector((state) => state.todo.todoList)

  const handleClearList = () => {}

  return (
    <div>
      <div>
        {todoList?.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  )
}

export default TodoList
