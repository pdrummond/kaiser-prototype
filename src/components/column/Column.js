import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
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
        title,
        showNewCardInput
      }
    } = this.props;
    const isActive = canDrop && isOver;
    //const backgroundColor = //this.props.column.backgroundColor ? this.props.column.backgroundColor : '#E2E4E6';

    return connectDropTarget(
      <div className={"Column" + (isActive ? ' active':'')}>
        {isActive && <i className="fa fa-plus drop-overlay-icon"/>}
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
          {!showNewCardInput && <a href="" className="newCardLink" onClick={this.handleNewCardLinkClicked.bind(this)}>New Card...</a>}
          {showNewCardInput && <input ref="newCardInput" className="newCardInput" placeholder="" onKeyUp={(e) => { if(e.keyCode === 13) { this.handleCardInputEnterPressed()} else if(e.keyCode === 27) {this.handleCardInputEscPressed()} }} autoFocus={true}/>}
        </div>

      </div>
    );
  }

  handleNewCardLinkClicked(e) {
    e.preventDefault();
    State.getReduxStore().dispatch({type: 'SET_COLUMN_SHOW_NEW_CARD_INPUT', columnId:this.props.column.id, show:true});
  }

  handleCardInputEnterPressed() {
    const title = findDOMNode(this.refs.newCardInput).value.trim();
    State.getReduxStore().dispatch({type: 'NEW_CARD', columnId:this.props.column.id, title});
  }

  handleCardInputEscPressed() {
    State.getReduxStore().dispatch({type: 'SET_COLUMN_SHOW_NEW_CARD_INPUT', columnId:this.props.column.id, show:false});
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
