import React, { Component } from 'react';
import * as State from '../../data/State';
import AssigneeItem from './AssigneeItem';
import './AssigneesList.css';

class AssigneesList extends Component {
  render() {
    const {
      card: {
        assignees
      }
    } = this.props;
    console.log("ASSIGNEES:", assignees);
    return (
      <div className="AssigneesList">
        <div className="assignees" style={{marginBottom:'10px'}}>
          {assignees.map( (assignee) => {
            let member = State.findMember(assignee.username);
            return <AssigneeItem key={member.username} member={member} card={this.props.card} columnId={this.props.columnId}/>
          })}
        </div>
      </div>
    );
  }
}

export default AssigneesList;
