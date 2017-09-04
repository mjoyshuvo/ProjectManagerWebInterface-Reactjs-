import React, { Component } from 'react';
import TodoItem from './todoitems';

class Todos extends Component {
  render() {
    let todoItems;
    if(this.props.todos){
      todoItems = this.props.todos.map(todo => {
        //console.log(project);
        return (
          <TodoItem key={todo.title} todo={todo} />
        );
      });
    }
    return (
      <div className="Todos">
        <h3>Todo List</h3>
        <hr/>
        {todoItems}
      </div>
    );
  }
}

export default Todos;