import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import * as State from '../../data/State';
import ItemTypes from '../../data/ItemTypes';
import './Card.css'

class Card extends Component {
  render() {
    const {
      columnIsActive,
      connectDragSource,
      connectDropTarget,
      isDragging,
      card: {
        id,
        title,
        editMode,
        assignee
      }
    } = this.props;
    const opacity = isDragging ? 0 : (columnIsActive?0.4:1);

    return connectDragSource(connectDropTarget(
      <div className="Card" style={{opacity, position:'relative'}}>
        {
          editMode
          ?
          <div className="title">
            <input className="cardTitleInput" ref="titleInput" defaultValue={title} onKeyUp={(e) => { if(e.keyCode === 13) {this.setCardTitle()} else if(e.keyCode===27){this.setCardEditMode(false)}}} autoFocus={true} placeholder="Enter card title"/>
          </div>
          :
          <div className="title" onDoubleClick={() => this.setCardEditMode(true)}>
            <span style={{fontSize:'14px'}}> <i className="card-task-icon fa fa-exclamation-circle"></i> {title}</span>
            {/*<span style={{color:'lightgray'}}> {index}</span>*/}
          </div>
        }
        <div style={{paddingLeft:'10px', fontSize:'12px', color:'gray', position:'relative', top:'4px'}}>
          {`#${id}`}
          <span className="badge"><i className="card-todo-icon fa fa-check-square-o"></i> 0/10</span>
          <span className="badge"><i className="card-bug-icon fa fa-bug"></i> 0/10</span>
        </div>
        {assignee === 'pdrummond' &&
        <div style={{position:'absolute', bottom:'0px', right:'5px'}}>
          <img className="card-assignee-image" src="/images/pdrummond.png" alt="Assigned to pdrummond"/>
        </div>}
      </div>
    ));
  }

  setCardTitle() {
    const title = findDOMNode(this.refs.titleInput).value.trim();
    if(title && title.length > 0) {
      State.getReduxStore().dispatch({type: 'SET_CARD_TITLE', columnId:this.props.columnId, cardId:this.props.card.id, title, editMode:false});
    }
  }

  setCardEditMode(editMode) {
    State.getReduxStore().dispatch({type: 'SET_CARD_EDIT_MODE', columnId:this.props.columnId, cardId:this.props.card.id, editMode});
  }

  handleClick() {
    State.getReduxStore().dispatch({type: 'SET_CARD_TITLE', title:'BOOM'});
  }
}

const cardSource = {
  beginDrag(props) {
    return {
      id: props.card.id,
      index: props.index,
      columnIndex: props.columnIndex,
      columnId: props.columnId
    };
  }
};

const cardTarget = {
  hover(props, monitor, component) {    
    const dragIndex = monitor.getItem().index;
    const columnIndex = monitor.getItem().columnIndex;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }
    // Time to actually perform the action... as long as the card is within the same column.
    if(columnIndex === props.columnIndex) {
      console.log("REORDER: idx: " + columnIndex + ", props.idx:" + props.columnIndex);
      State.getReduxStore().dispatch({type: 'REORDER_CARD', columnIndex, dragIndex, hoverIndex});
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      monitor.getItem().index = hoverIndex;
    }
  }
};

function collectDropTarget(connect, monitor) {
  return {
    connectDropTarget:connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

function collectDragSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

let DraggableCard = DragSource(ItemTypes.CARD, cardSource, collectDragSource)(Card);
export default DropTarget(ItemTypes.CARD, cardTarget, collectDropTarget)(DraggableCard);
