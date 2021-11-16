import React from 'react';
import '../css/taskList.css';
import TaskListItem from '../components/taskListItem';
import { useTodoState } from '../TodoContext';

function TaskList() {
  const todos = useTodoState();

  return (
    <div className="task__wrap">
      <ul className="task__list">
        {todos.map((todo) => (
          <TaskListItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
