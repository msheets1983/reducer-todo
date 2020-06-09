import React, { useState, useReducer } from 'react';
import { reducer, initialState } from './reducers/reducer';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

let date = new Date();
const month = date.toLocaleString('default', { month: 'long' });
const dd = String(date.getDate()).padStart(2, '0');
const yyyy = date.getFullYear();
date = month + ' ' + dd + ', ' + yyyy;

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const [ task, setTask ] = useState("");

  const handleInput = e => {
    setTask(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: task });
  }

  const toggleTask = toggle => {
    dispatch({ type: "TOGGLE_TODO", payload: toggle });
  }

  const clearTasks = () => {
    dispatch({ type: "CLEAR_TODO" });
  }

  return (
    <div className='todo-app'>
      <h1>To Do App</h1>
      <h2 className='date'>{date}</h2>
      <h2 className='todo-title' >Tasks</h2>

      <TodoList
        tasks={state}
        toggleTask={toggleTask}
        clearTasks={clearTasks}
      />

      <TodoForm
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;