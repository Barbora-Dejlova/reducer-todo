import React, {useState} from 'react';

function addToDoForm(props) {
  const [item, setItem] = useState('');

  const handleSubmit = event => {
    ev
  }
  return (
    <div className='App'>
      <form onSubmit={props.handleSubmit}>
        <input type='text' name='newTodo' onChange={e => setItem(e.target.value)} />
        <button type='submit'>Add To Do</button>
        <button onClick={props.clear}>Clear Completed</button>
      </form>
    </div>
  );
}

export default addToDoForm;