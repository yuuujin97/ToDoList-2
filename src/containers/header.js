import React from 'react';
import '../css/header.css';
import InputAddTask from '../components/inputAddTask';

function Header() {
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
