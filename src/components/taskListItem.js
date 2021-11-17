import React, { useState } from 'react';
import { MdDone } from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext';

function TaskListItem({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const onDone = () => dispatch({ type: 'Done', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });

  const [isShow, setMenu] = useState(false);
  const showMenu = () => {
    setMenu((isShow) => !isShow);
  };

  const showMemo = () => {};

  return (
    <li className="task__item">
      <div className={done ? 'task__check done' : 'task__check'} done={done} onClick={onDone}>
        {done && <MdDone />}
      </div>
      <span>{text}</span>
      <button className="task__menu__btn" onClick={showMenu}>
        <i className="fas fa-ellipsis-h"></i>
      </button>

      <div className={isShow ? 'task__menu show' : 'task__menu'}>
        <ul>
          <li>
            <button onClick={onRemove}>
              <i className="fas fa-thumbtack"></i> Pin on the top
            </button>
          </li>
          <li>
            <button onClick={showMemo}>
              <i className="fas fa-pen-alt"></i> Add a memo
            </button>
          </li>
          <li>
            <button onClick={onRemove}>
              <i className="fas fa-trash"></i> Delete
            </button>
          </li>
        </ul>
      </div>
    </li>
  );
}

export default TaskListItem;
