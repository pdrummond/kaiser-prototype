import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import * as State from '../../data/State.js';
import './MemberItem.css';

class MemberItem extends Component {
  render() {

    const {
      member
    } = this.props;

    return (
      <div className="MemberItem">
        <img src={member.imageUrl} alt={member.username}/>
        <span style={{color:'gray', fontSize:'30px', marginLeft:'10px', fontWeight:'100'}}>{member.username}</span>
        <div style={{float:'right', paddingRight:'10px'}}>
          <select placeholder="Choose Role...">
            <option>User</option>
            <option>Developer</option>
            <option>Tester</option>
            <option>Manager</option>
            <option>Admin</option>
            <option>User</option>
          </select>
          <input className="imageUrlInput" ref='imageUrlInput' defaultValue={member.imageUrl} placeholder="Add image URL here..." onKeyUp={(e) => { if(e.keyCode === 13) {this.handleImageUrlChanged()}}}/>
          <i className="fa fa-times icon-button" onClick={this.handleDeleteClicked.bind(this)}/>
        </div>
      </div>
    );
  }

  handleImageUrlChanged() {
    const imageUrl = findDOMNode(this.refs.imageUrlInput).value.trim();
    if(imageUrl && imageUrl.length > 0) {
      State.getReduxStore().dispatch({type: 'SET_MEMBER_IMAGE_URL', username:this.props.member.username, imageUrl});
    }
  }

  handleDeleteClicked() {
    State.getReduxStore().dispatch({type: 'DELETE_MEMBER', username:this.props.member.username});
  }
}

export default MemberItem;
