import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import MemberItem from './MemberItem';
import * as State from '../../data/State.js';
import './MemberList.css';

class MemberList extends Component {
  render() {
    const {
      members
    } = this.props;
    const numMembers = members.length;
    return (
      <div className="MemberList">
        <h3>Members <span>({numMembers})</span></h3>
        <div className="members" style={{marginBottom:'10px'}}>
        {members.map( (member) => (
          <MemberItem key={member.username} card={this.props.card} member={member} columnId={this.props.columnId}/>
        ))}
        </div>
        <input ref="addMemberInput" className="addMemberInput" placeholder="Add Member..." onKeyUp={(e) => { if(e.keyCode === 13) {this.handleNewMember()} }} autoFocus={true}/>
      </div>
    );
  }

  handleNewMember() {
    const username = findDOMNode(this.refs.addMemberInput).value.trim();
    if(username && username.length > 0) {
      State.getReduxStore().dispatch({type: 'NEW_MEMBER', username});
      findDOMNode(this.refs.addMemberInput).value = '';
    }
  }
}

export default MemberList;
