import { FaInfoCircle, FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";

function TodoItem({todo}) {
  return (
    <div className="todo">
      <input type="checkbox" name="completed" id="completed" />
      <div className="todotitle">{todo.todoItem}</div>
      {todo.deadline.length!=0?

      <div className="deadline">{todo.deadline}</div>:""}
      
      <div className="todo-button-area">
        <div className="todo-buttons">
          <button className="icon-button">
            <FaPencilAlt color="#5e9cff" size={20} />
          </button>
          <button className="icon-button">
            <FaRegTrashAlt color="#ff5e66" size={20} />
          </button>
        </div>
        <div className="createdDate">
          <FaInfoCircle />
          <span>{todo.created}</span>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
