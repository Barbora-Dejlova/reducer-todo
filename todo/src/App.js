import React, {useReducer} from 'react';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';
import './App.css';

import {reducer} from './reducers/reducer';
import {toggleCompleted, addTodo, clearCompleted} from './actions/todoActions';

const initialTodos = [
  {
    item: 'Getting ready',
    id: 12345123,
    completed: true
  },
  {
    item: 'Fixed Now',
    id: 34512324,
    completed: false
  }
];

function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const toggle = (id) => {
    dispatch(toggleCompleted(id));
  };

  const add = item => {
    dispatch(addTodo(item));
  };

  const clear = () => {
    dispatch(clearCompleted());
  };

  return (
    <div className="App">
      <Todos todos={todos} toggleCompleted={toggle} />
      <TodoForm addTodo={add} clearCompleted={clear} />
    </div>
  );
}

export default App;
