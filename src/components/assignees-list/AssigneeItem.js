import React, { Component } from 'react';
import * as State from '../../data/State';
import './AssigneeItem.css';

class AssigneeItem extends Component {

  render() {

    const {
      member
    } = this.props;

    return (
      <div className="AssigneeItem">
        <img key={member.username} src={member.imageUrl} alt={member.username} title={member.username}/>
        <span style={{color:'gray'}}>{member.username}</span>
        <div style={{float:'right', paddingRight:'10px'}}>
          <i className="fa fa-times icon-button" onClick={this.handleDeleteClicked.bind(this)}/>
        </div>
      </div>
    );
  }

  handleDeleteClicked() {
    State.getReduxStore().dispatch({type: 'DELETE_ASSIGNEE', columnId:this.props.columnId, cardId:this.props.card.id, assignee:this.props.member.username});
  }
}

export default AssigneeItem;
