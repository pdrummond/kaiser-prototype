import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import BugItem from './BugItem';
import * as State from '../../data/State.js';
import './BugList.css';

class BugList extends Component {
  render() {
    const {
      card: {
        bugs
      }
    } = this.props;
    const numBugs = bugs.length;
    const numDoneBugs = bugs.filter((t) => t.done === true).length;
    return (
      <div className="BugList">
        <h3>Bugs <span style={{color:(numBugs===numDoneBugs?'#8bc34a':'black')}}>({numDoneBugs}/{numBugs})</span></h3>
        <div className="bugs" style={{marginBottom:'10px'}}>
        {bugs.map( (bug) => (
          <BugItem key={bug.id} card={this.props.card} bug={bug} columnId={this.props.columnId}/>
        ))}
        </div>
        <input ref="addBugInput" className="addBugInput" placeholder="Add Bug..." onKeyUp={(e) => { if(e.keyCode === 13) {this.handleNewBug()} }} autoFocus={true}/>
      </div>
    );
  }

  handleNewBug() {
    const title = findDOMNode(this.refs.addBugInput).value.trim();
    if(title && title.length > 0) {
      State.getReduxStore().dispatch({type: 'NEW_BUG', columnId:this.props.columnId, cardId:this.props.card.id, title});
      findDOMNode(this.refs.addBugInput).value = '';
    }
  }
}

export default BugList;
