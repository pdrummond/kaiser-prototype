import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../../data/ItemTypes';
import Card from '../card/Card';
import './Column.css';

const columnTarget = {
  drop() {
  }
};

class Column extends Component {
  render() {
    const {
      canDrop, isOver, connectDropTarget,
      columnIndex,
      column: {
        title
      }
    } = this.props;
    const isActive = /*canDrop &&*/ isOver;
    console.log("BOOM:", this.props);

    return (
      <div className="Column" style={{backgroundColor:(isActive?'red':'whitesmoke')}}>
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

function collectDropTarget(connect, monitor) {
  //console.log("BOOMX: ", monitor.getItem());
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

export default DropTarget(ItemTypes.CARD, columnTarget, collectDropTarget)(Column);
