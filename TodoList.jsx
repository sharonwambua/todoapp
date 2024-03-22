import TodoItem from "./TodoItem";

function Todolist({ data }) {
  return (
    <div className="todoList">
      {data.map((todo, i) => (
        <TodoItem key={i} todo={todo} />
      ))}
    </div>
  );
}
export default Todolist;
