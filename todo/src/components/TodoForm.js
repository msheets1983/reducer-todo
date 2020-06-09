import React from "react";

const TodoForm = props => {

  return (
    <div>
      <form className='todo-form' onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="task"
          value={props.task}
          onChange={props.handleInput}
        />

        <button className='add' onClick={props.handleSubmit}>Add</button>
      </form>
  </div>
  )
}

export default TodoForm; 