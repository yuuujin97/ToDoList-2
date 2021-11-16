import React, { Component } from 'react';

class TaskListItem extends Component {
  constructor() {
    super();
    this.state = {
      isShow: false,
    };

    this.showMenu = this.showMenu.bind(this);
  }

  showMenu() {
    this.setState((prevState) => ({
      isShow: !prevState.isShow,
    }));
  }

  render() {
    return (
      <li className="task__item">
        <input type="checkbox" className="task__done" />
        <span>Study create react app</span>
        <button onClick={this.showMenu}>
          <i class="fas fa-ellipsis-h"></i>
        </button>
        <div className={this.state.isShow ? 'task__menu show' : 'task__menu'}>
          <ul>
            <li>Pin on the top</li>
            <li>Add a memo</li>
            <li>Delete</li>
          </ul>
        </div>
      </li>
    );
  }
}

export default TaskListItem;
