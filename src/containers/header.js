import React from 'react';
import '../css/header.css';
import InputAddTask from '../components/inputAddTask';
import { useTodoState } from '../TodoContext';

function Header() {
  const todos = useTodoState();
  console.log(todos);
  return (
    <header>
      <div>
        <p>To Do List</p>
        <InputAddTask />
      </div>
    </header>
  );
}

export default Header;
