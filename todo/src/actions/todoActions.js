export const TodoActionTypes = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_COMPLETED: 'TOGGLE_COMPLETED',
  CLEAR_COMPLETED: 'CLEAR_COMPLETED'
}

export const addTodo = item => {
  return {
    type: TodoActionTypes.ADD_TODO,
    payload: { item, completed: false, id: Date.now() }
  };
};

export const toggleCompleted = id => {
  return {
    type: TodoActionTypes.TOGGLE_COMPLETED,
    payload: id
  };
};

export const clearCompleted = () => {
  return {
    type: TodoActionTypes.CLEAR_COMPLETED
  };
};