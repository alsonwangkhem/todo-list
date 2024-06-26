import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

// useEffect hook
function App() {
  const [todos, setTodos] = useState([]);
  function fetchTodos() {
    axios.get("https://todo-list-xkc8.onrender.com/todos")
    .then(response => {
      setTodos(response.data);
    })
  }
  useEffect(() => {
    fetchTodos();
  }, []);

  function addTodo(title, description) {
    axios.post("https://todo-list-xkc8.onrender.com/todo", {
      title: title,
      description: description
    })
    .then(() => {
      alert("Todo added");
      fetchTodos();
    })
  }
  function markCompletion(id) {
    axios.put("https://todo-list-xkc8.onrender.com/completed", {
      id: id
    })
    .then(() =>{
      fetchTodos();
    })
  }

  return (
    <div>
      <CreateTodo addTodo={addTodo}></CreateTodo>
      <Todos todos={todos} markCompletion={markCompletion}></Todos>
    </div>
  )
}

export default App
