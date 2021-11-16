import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Header from './containers/header';
import TaskList from './containers/taskList';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div className="wrap">
      <Header />
      <TaskList />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
