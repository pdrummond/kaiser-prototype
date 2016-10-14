import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import * as State from '../../data/State.js';
import './TodoItem.css';

class TodoItem extends Component {
  render() {

    const {
      todo
    } = this.props;

    return (
      <div className="TodoItem">
        <label><input ref="checkBoxInput" type="checkbox" checked={todo.done} onChange={this.handleCheckClicked.bind(this)}/> {todo.title}</label>
        <div style={{float:'right', paddingRight:'10px'}}>
          <select style={{marginRight:'10px'}}>
            <option value="pdrummond">Paul Drummond</option>
            <option value="jswan">John Swan</option>
          </select>
          <i className="fa fa-times icon-button" onClick={this.handleDeleteClicked.bind(this)}/>
        </div>
      </div>
    );
  }

  handleCheckClicked() {
    const done = findDOMNode(this.refs.checkBoxInput).checked;
    State.getReduxStore().dispatch({type: 'TOGGLE_TODO_DONE', columnId:this.props.columnId, cardId:this.props.card.id, todoId:this.props.todo.id, done});
  }

  handleDeleteClicked() {
    State.getReduxStore().dispatch({type: 'DELETE_TODO', columnId:this.props.columnId, cardId:this.props.card.id, todoId:this.props.todo.id});
  }
}

export default TodoItem;
