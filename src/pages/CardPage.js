import React, { Component } from 'react';
import * as State from '../data/State';
import './CardPage.css'

class CardPage extends Component {

  render() {
    return (
      <div className="CardPage">
        <p>This is the card page for card {this.props.cardId}</p>
        <p><a href="" onClick={this.handleBackClick.bind(this)}>Back to board</a></p>
      </div>
    );
  }

  handleBackClick(e) {
    e.preventDefault();
    State.getReduxStore().dispatch({type: 'SHOW_BOARD_PAGE'});
  }
}

export default CardPage;
