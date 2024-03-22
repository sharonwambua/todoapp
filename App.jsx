import { useAutocomplete } from '@mui/material'
import './components/Logo.jsx'
import Logo from './components/Logo.jsx'
import TodoInput from './components/TodoInput.jsx'
import Todolist from './components/TodoList.jsx'
import { useState } from 'react'


function App() {
  const [data,setData]=useState([])
  function handleUserData(todoItem,deadline){
    const currentDate=new Date().toDateString()
    const todoData={
      todoItem:todoItem,
      deadline:deadline,
      created:currentDate,
    }
setData((prevData)=>[...prevData, todoData])
  console.log(data)
  }
  return (
   <>
   <div className='container'>   
   <Logo/>
   <TodoInput userData={handleUserData}/>
   <Todolist data={data}/>
   
    </div>
   </>
  )
}

export default App
