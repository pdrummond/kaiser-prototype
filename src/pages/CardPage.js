import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import * as State from '../data/State';
import './CardPage.css';
import * as CardIcon from '../utils/CardIcon';
import TodoList from '../components/todo-list/TodoList';
import BugList from '../components/bug-list/BugList';
import CommentList from '../components/comment-list/CommentList';

class CardPage extends Component {

  render() {
    this.card = State.findCard(State.findColumn(this.props.columnId), this.props.cardId);
    return (
      <div className="CardPage">
        <i onClick={this.handleBackClick.bind(this)} className="icon-button fa fa-times"></i>
        <p>{this.renderCardTitle()}</p>
        <div className="contentArea">
          <div className="checkLists">
          <TodoList card={this.card} columnId={this.props.columnId}/>
          <BugList card={this.card} columnId={this.props.columnId}/>
          </div>
          <CommentList card={this.card} columnId={this.props.columnId}/>
        </div>

        <div className="rightSidebar">
          <h3>Actions</h3>
            <button className="actionButton" onClick={this.handleChangeCardTitle.bind(this)}><i className="fa fa-pencil"/> Change Title</button>
            <button className="actionButton"><i className="fa fa-times"/> Delete Card</button>
          <h3>Card Type</h3>
          <select ref="cardTypeSelect" className="actionSelect" value={this.card.type} placeholder="Card Type" onChange={this.handleCardTypeChanged.bind(this)}>
            <option value="task">Task</option>
            <option value="enhancement">Enhancement</option>
            <option value="bug">Bug</option>
          </select>
        </div>
      </div>
    );
  }

  renderCardTitle(card) {
    const cardTypeIcon = CardIcon.getCardTypeIcon(this.card.type);
    const cardTypeIconClassName = CardIcon.getCardTypeIconClassName(this.card.type);
    return (
      <span style={{fontSize:'30px', color:'#5d5d5d'}}> <i className={ cardTypeIconClassName + " fa " + cardTypeIcon}></i> {this.card.title}</span>
    )
  }

  handleBackClick(e) {
    e.preventDefault();
    State.getReduxStore().dispatch({type: 'SHOW_BOARD_PAGE'});
  }

  handleChangeCardTitle() {
    const title = prompt("Enter card title:", this.card.title);
    if(title && title.length > 0) {
      State.getReduxStore().dispatch({type: 'SET_CARD_TITLE', columnId:this.props.columnId, cardId:this.props.cardId, title});
    }
  }

  handleCardTypeChanged() {
    const cardType = findDOMNode(this.refs.cardTypeSelect).value;
    if(cardType) {
      State.getReduxStore().dispatch({type: 'SET_CARD_TYPE', columnId:this.props.columnId, cardId:this.props.cardId, cardType});
    }
  }
}

export default CardPage;
