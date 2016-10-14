import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import moment from 'moment';
import * as State from '../../data/State.js';
import './CommentItem.css';


class CommentItem extends Component {
  render() {

    const {
      comment
    } = this.props;

    return (
      <div className="CommentItem">
        <img src={comment.userImageUrl} alt={comment.username}/>
        <div style={{paddingLeft:'50px'}}>
          <b>{comment.username}</b> <span style={{color:'#adadad'}}>{moment(comment.createdAt).fromNow()}</span>
          <div style={{paddingTop:'5px'}}>{comment.text}</div>
        </div>
      </div>
    );
  }

  handleCheckClicked() {
    const done = findDOMNode(this.refs.checkBoxInput).checked;
    State.getReduxStore().dispatch({type: 'TOGGLE_TODO_DONE', columnId:this.props.columnId, cardId:this.props.card.id, commentId:this.props.comment.id, done});
  }

  handleDeleteClicked() {
    State.getReduxStore().dispatch({type: 'DELETE_TODO', columnId:this.props.columnId, cardId:this.props.card.id, commentId:this.props.comment.id});
  }
}

export default CommentItem;
