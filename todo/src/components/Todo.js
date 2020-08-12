import React from 'react';

const Todo = ({todo, toggleCompleted}) => {
  return (
    <p
      className={todo.completed ? 'completed' : 'notCompleted'}
      onClick={() => toggleCompleted(todo.id)}>
      {todo.item}
    </p>
  )
}

export default Todo;