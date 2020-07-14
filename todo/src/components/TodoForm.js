import React, {useState} from 'react';

function AddToDoForm(props) {
  const [item, setItem] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    props.addTodo(item);
    setItem('');
  }

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input type='text' name='newTodo' onChange={e => setItem(e.target.value)} />
        <button type='submit'>Add To Do</button>
        <button onClick={props.clearCompleted}>Clear Completed</button>
      </form>
    </div>
  );
}

export default AddToDoForm;