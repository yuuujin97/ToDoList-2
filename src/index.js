import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Header from './containers/header';
import TaskList from './containers/taskList';
import reportWebVitals from './reportWebVitals';
import { TodoProvider } from './TodoContext';

ReactDOM.render(
  <TodoProvider>
    <div className="wrap">
      <Header />
      <TaskList />
    </div>
  </TodoProvider>,
  document.getElementById('root')
);

reportWebVitals();
