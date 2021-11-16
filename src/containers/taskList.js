import React from 'react';
import '../css/taskList.css';
import TaskListItem from '../components/taskListItem';

function TaskList() {
  return (
    <div className="task__wrap">
      <ul className="task__list">
        <TaskListItem />
      </ul>
    </div>
  );
}

export default TaskList;
