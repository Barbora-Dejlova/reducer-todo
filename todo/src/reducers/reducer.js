import {TodoActionTypes as Types} from '../actions/todoActions';

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

export const reducer = (state=initialTodos, action) => {
  switch(action.type) {
    case Types.ADD_TODO: {
      return [...state, action.payload];
    }
    case Types.TOGGLE_COMPLETED: {
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {...todo, completed: !todo.completed};
        }
        return todo;
      })
    }
    case Types.CLEAR_COMPLETED: {
      return state.filter(todo => !todo.completed);
    }
    default: {
      return state;
    }
  }
}