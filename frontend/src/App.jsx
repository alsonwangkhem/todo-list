import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

// useEffect hook
function App() {
  const [todos, setTodos] = useState([]);
  function fetchTodos() {
    axios.get("http://localhost:3000/todos")
    .then(response => {
      setTodos(response.data);
    })
  }
  useEffect(() => {
    fetchTodos();
  }, []);

  function addTodo(title, description) {
    axios.post("http://localhost:3000/todo", {
      title: title,
      description: description
    })
    .then(() => {
      alert("Todo added");
      fetchTodos();
    })
  }
  function markCompletion(id) {
    axios.put("http://localhost:3000/completed", {
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
