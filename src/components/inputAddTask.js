import React, { useState } from 'react';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

function InputAddTask() {
  const [value, setValue] = useState('');

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onChange = (e) => setValue(e.target.value);
  const onCreate = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });
    setValue('');
    nextId.current += 1;
  };

  return (
    <div className="input__wrap">
      <form onSubmit={onCreate}>
        <input type="text" className="input__task" value={value} onChange={onChange} placeholder="Add a task..." autoFocus></input>
      </form>
    </div>
  );
}

export default React.memo(InputAddTask);
