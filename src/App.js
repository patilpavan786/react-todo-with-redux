import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
// import "./styles.css";
import { useState } from 'react';
import actions from './actions';

export default function App() {
  const [task, setTask] = useState('');
  const todo = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(todo);
  return (
    <div className="App">
      <input value={task} onChange={(e) => setTask(e.target.value)} />

      <button
        onClick={() => {
          dispatch({ type: actions.ADD, payload: task });
          setTask('');
        }}> ADD</button>
        
      {todo.map((x) => (
        <div key={x.id}>
          <p>
            {x.isComplete && '✅'}
            {x.task}
          </p>

          <button
            onClick={() => dispatch({ type: actions.COMPLETE, payload: x })}
          >
            Complete
          </button>
          <button
            onClick={() => dispatch({ type: actions.DELETE, payload: x.id })}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
