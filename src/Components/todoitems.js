import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <li className="Todo list-group-item">
        <strong>{this.props.todo.title}</strong>
      </li>
    );
  }
}
export default TodoItem;