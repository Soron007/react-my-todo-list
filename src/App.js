import React, { useState, useEffect } from 'react'
import './App.css';

const App = () => {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);


  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {

    saveLocalTodos();
  }, [todos])


  //Local Storage
  const saveLocalTodos = () => {

    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos))
    }

  }

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((task) => task.id === editId);
      const updatedTodos = todos.map((task) => task.id === editTodo.id ?
        task = { id: task.id, todo } : { id: task.id, todo: task.todo }
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }
    if (todo !== '') {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos])
      setTodo("");
    }


  }

  const handleDelete = (id) => {
    const remainingTodo = todos.filter((task) => task.id !== id);
    setTodos([...remainingTodo])
  }

  const handleEdit = (id) => {
    const editTodo = todos.find((task) => task.id === id);

    setTodo(editTodo.todo);
    setEditId(id);
  }


  return (
    <div className='App'>
      <div className="container">
        <h1>Todo List App</h1>
        <form className='todoForm' onSubmit={handleSubmit}>
          <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
          <button type='submit'>{editId ? "Edit" : "Add"}</button>
        </form>

        <ul className='allTodos'>
          {
            todos.map((task) => (
              <li className='singleTodo'>
                <span className='todoText' key={task.id}>{task.todo}</span>
                <button onClick={() => handleEdit(task.id)}>Edit</button>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
              </li>
            ))
          }



        </ul>
      </div>
    </div>
  )
}

export default App
