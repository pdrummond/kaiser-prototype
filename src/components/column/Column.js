import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../../data/ItemTypes';
import * as State from '../../data/State';
import Card from '../card/Card';
import './Column.css';

const columnTarget = {
  drop(props, monitor) {
    const card = monitor.getItem();
    State.getReduxStore().dispatch({
      type: 'MOVE_CARD',
      cardId:card.id,
      cardIndex:card.index,
      toColumnId:props.column.id,
      fromColumnId:card.columnId
    });
  },

  canDrop(props, monitor, component) {
    return props.column.id !== monitor.getItem().columnId;
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
    const isActive = canDrop && isOver;
    //const backgroundColor = //this.props.column.backgroundColor ? this.props.column.backgroundColor : '#E2E4E6';

    return connectDropTarget(
      <div className={"Column" + (isActive ? ' active':'')}>
        <div className="title">{title} <span style={{color:'#565151', fontWeight:'normal'}}>({this.props.column.cards.length})</span></div>
        <div className="cards">
          {this.props.column.cards.map( (card, index) => {
            return (
              <Card
                columnIsActive={isActive}
                key={card.id}
                index={index}
                card={card}
                columnIndex={columnIndex}
                columnId={this.props.column.id}/>
              );
          })}
        </div>
      </div>
    );
  }
}

function collectDropTarget(connectDragSource, monitor) {
  //console.log("BOOMX: ", monitor.getItem());
  return {
    connectDropTarget: connectDragSource.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    item: monitor.getItem()
  };
}

export default DropTarget(ItemTypes.CARD, columnTarget, collectDropTarget)(Column);
