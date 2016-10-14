import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import TodoItem from './TodoItem';
import * as State from '../../data/State.js';
import './TodoList.css';

class TodoList extends Component {
  render() {
    const {
      card: {
        todos
      }
    } = this.props;
    const numTodos = todos.length;
    const numDoneTodos = todos.filter((t) => t.done === true).length;
    return (
      <div className="TodoList">
        <h3>Development Todos <span style={{color:(numTodos===numDoneTodos?'#8bc34a':'black')}}>({numDoneTodos}/{numTodos})</span></h3>
        <div className="todos" style={{marginBottom:'10px'}}>
        {todos.map( (todo) => (
          <TodoItem key={todo.id} card={this.props.card} todo={todo} columnId={this.props.columnId}/>
        ))}
        </div>
        <input ref="addTodoInput" className="addTodoInput" placeholder="Add Todo..." onKeyUp={(e) => { if(e.keyCode === 13) {this.handleNewTodo()} }} autoFocus={true}/>
      </div>
    );
  }

  handleNewTodo() {
    const title = findDOMNode(this.refs.addTodoInput).value.trim();
    if(title && title.length > 0) {
      State.getReduxStore().dispatch({type: 'ADD_TODO', columnId:this.props.columnId, cardId:this.props.card.id, title});
      findDOMNode(this.refs.addTodoInput).value = '';
    }
  }
}

export default TodoList;
