import React, { Component } from 'react';
import * as State from '../../data/State';
import './MembersBox.css';

class MembersBox extends Component {
  render() {
    return (
      <div className="MembersBox" onClick={this.handleClick.bind(this)}>
        <div className="members" style={{marginBottom:'10px'}}>
          {this.props.members.map( (member) => (
            <img key={member.username} src={member.imageUrl} alt={member.username} title={member.username}/>
          ))}
        </div>
        {this.props.members.length === 0 && <a href="" style={{color:'#87B4DD'}}>Add Members...</a>}
      </div>
    );
  }

  handleClick(e) {
    e.preventDefault();
    State.getReduxStore().dispatch({type: 'SHOW_MEMBERS_PAGE'});
  }
}

export default MembersBox;
