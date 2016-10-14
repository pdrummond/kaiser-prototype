import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import * as State from '../../data/State.js';
import './BugItem.css';

class BugItem extends Component {
  render() {

    const {
      bug
    } = this.props;

    return (
      <div className="BugItem">
        <label><input ref="checkBoxInput" type="checkbox" checked={bug.done} onChange={this.handleCheckClicked.bind(this)}/> {bug.title}</label>
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
    State.getReduxStore().dispatch({type: 'TOGGLE_BUG_DONE', columnId:this.props.columnId, cardId:this.props.card.id, bugId:this.props.bug.id, done});
  }

  handleDeleteClicked() {
    State.getReduxStore().dispatch({type: 'DELETE_BUG', columnId:this.props.columnId, cardId:this.props.card.id, bugId:this.props.bug.id});
  }
}

export default BugItem;
