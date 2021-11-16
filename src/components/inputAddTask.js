import React, { Component } from 'react';

class InputAddTask extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="input__wrap">
        <input type="text" className="input__task" placeholder="Add a task..."></input>
      </div>
    );
  }
}

export default InputAddTask;
