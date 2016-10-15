import React, { Component } from 'react';
import MemberList from '../../components/member-list/MemberList';
import * as State from '../../data/State';
import './MembersPage.css';

class MembersPage extends Component {

  render() {
    return (
      <div className="MembersPage">
        <i onClick={this.handleBackClick.bind(this)} className="icon-button fa fa-times"></i>
        <MemberList members={this.props.members}/>
      </div>
    )
  }

  handleBackClick(e) {
    e.preventDefault();
    State.getReduxStore().dispatch({type: 'SHOW_BOARD_PAGE'});
  }
}

export default MembersPage;
