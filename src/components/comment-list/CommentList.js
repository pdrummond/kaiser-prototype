import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import CommentItem from './CommentItem';
import * as State from '../../data/State.js';
import './CommentList.css';

class CommentList extends Component {
  render() {
    const {
      card: {
        comments
      }
    } = this.props;
    const numComments = comments.length;
    return (
      <div className="CommentList">
        <h3>Comments <span>({numComments})</span></h3>
        <div className="comments" style={{marginBottom:'10px'}}>
        {comments.map( (comment) => (
          <CommentItem key={comment.id} card={this.props.card} comment={comment} columnId={this.props.columnId}/>
        ))}
        </div>
        <textarea ref="addCommentTextArea" className="addCommentTextArea" placeholder="Add Comment..." onKeyUp={(e) => { if(e.keyCode === 13) {this.handleNewComment()} }} autoFocus={true}/>
      </div>
    );
  }

  handleNewComment() {
    const text = findDOMNode(this.refs.addCommentTextArea).value.trim();
    if(text && text.length > 0) {
      State.getReduxStore().dispatch({type: 'NEW_COMMENT', columnId:this.props.columnId, cardId:this.props.card.id, text});
      findDOMNode(this.refs.addCommentTextArea).value = '';
    }
  }
}

export default CommentList;
