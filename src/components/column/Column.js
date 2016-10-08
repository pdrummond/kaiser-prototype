import React, { Component } from 'react';
import Card from '../card/Card';
import './Column.css';
import * as State from '../../data/State';

class Column extends Component {
  render() {

    const {
      column: {
        title
      }
    } = this.props;

    return (
      <div className="Column">
        <div className="title">{title}</div>
        <div className="cards">
          {this.props.column.cardIds.map( (cardId) => {
            const card = State.findCard(cardId);
            return (<Card key={card.id} card={card}/>);
          })}
        </div>
      </div>
    );
  }
}

export default Column;
