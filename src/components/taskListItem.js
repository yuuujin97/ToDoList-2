import React, { useState } from 'react';
import { useTodoDispatch } from '../TodoContext';

function TaskListItem({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const onRemove = () => dispatch({ type: 'REMOVE', id });
  const [isShow, setMenu] = useState(false);
  const showMenu = () => {
    setMenu((isShow) => !isShow);
  };

  return (
    <li className="task__item">
      <input type="checkbox" className="task__done" defaultChecked={done} />
      <span>{text}</span>
      <button onClick={showMenu}>
        <i className="fas fa-ellipsis-h"></i>
      </button>
      <div className={isShow ? 'task__menu show' : 'task__menu'}>
        <ul>
          <li>
            <i className="fas fa-thumbtack"></i> Pin on the top
          </li>
          <li>
            <i className="fas fa-pen-alt"></i> Add a memo
          </li>
          <li>
            <a onClick={onRemove}>
              <i className="fas fa-trash"></i> Delete
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
}

export default TaskListItem;
