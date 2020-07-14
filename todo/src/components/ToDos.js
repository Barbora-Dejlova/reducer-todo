import React from 'react';
import Todo from './Todo';

function Todos({todos, toggleCompleted}) {
  return (
    <div>
      {todos.map(item => (
        <Todo key={item.id} todo={item} toggleCompleted={toggleCompleted} /> 
      ))}
    </div>
  );
}

export default Todos;