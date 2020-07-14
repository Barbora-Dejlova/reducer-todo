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

function ToDos({todos, toggleCompleted}) {
  return (
    <div>
      {todos.map(item => (
        <Todo key={item.id} todo={item} toggleCompleted={toggleCompleted} /> 
      ))}
    </div>
  );
}

export default ToDos;