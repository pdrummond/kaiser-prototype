import React, { Component } from 'react';
import * as State from '../../data/State';
import './Card.css'

class Card extends Component {
  render() {

    const {
      card: {
        title
      }
    } = this.props;

    return (
      <div className="Card">
        <div className="title" onClick={this.handleClick.bind(this)}>{title}</div>
      </div>
    );
  }

  handleClick() {
    State.getReduxStore().dispatch({type: 'SET_CARD_TITLE', title:'BOOM'});
  }
}

export default Card;
