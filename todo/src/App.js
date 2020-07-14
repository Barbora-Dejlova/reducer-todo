import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';

import {reducer} from './reducers/reducer';
import {toggleCompleted, addTodo, clearCompleted} from './actions/todoActions';

function App() {
  const [todos, dispatch] = useReducer(reducer);

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
      <TodoForm addTodo={add} />
    </div>
  );
}

export default App;
