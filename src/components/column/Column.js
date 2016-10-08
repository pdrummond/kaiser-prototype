import React, { Component } from 'react';
import Card from '../card/Card';
import './Column.css';

class Column extends Component {
  render() {

    const {
      columnIndex,
      column: {
        title
      }
    } = this.props;

    return (
      <div className="Column">
        <div className="title">{title}</div>
        <div className="cards">
          {this.props.column.cards.map( (card, index) => {
            return (<Card key={card.id} index={index} card={card} columnIndex={columnIndex}/>);
          })}
        </div>
      </div>
    );
  }
}

export default Column;
