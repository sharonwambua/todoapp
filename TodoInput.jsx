import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const TodoInput = ({userData}) => {
 const[isVisible,setIsVisible]=useState(false);
 
 const[todoItem,setTodoItem]=useState("");
 const[deadline,setDeadline]=useState("");
const handleIsVisible=() =>{
  setIsVisible(!isVisible)
}
function handleAdd(){
  userData(todoItem,deadline)
}

  return (
    <>
      <div className="input-container">
        <div className="input-area">
          <input
            type="text"
            name="todo"
            id="todoItem"
            placeholder="Add new"
            onChange={(e)=>setTodoItem(e.target.value)}
          
          />
          {
            isVisible?(

          <input type="date" id="deadline" name="deadline" onChange={(e)=>setDeadline(e.target.value)} />
            ):""
          }
          <button className="icon-button" onClick={handleIsVisible}>
            <FaCalendarAlt className="icon"/>
          </button>
          <button className="primary-button"  onClick={handleAdd} >Add</button>
        </div>
      </div>
    
    
     
    </>
  );
};

export default TodoInput;
