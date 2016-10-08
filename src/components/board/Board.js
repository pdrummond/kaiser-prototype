import React, { Component } from 'react';
import BacklogLine from '../backlog-line/BacklogLine'
import ComponentLine from '../component-line/ComponentLine'
import './Board.css';
import * as State from '../../data/State';

class Board extends Component {
  render() {
    return (
      <div className="Board">
        <h1>{this.props.board.title}</h1>
        {this.props.board.lineIds.map( (lineId) => {
          let line = State.findLine(lineId);
          switch(line.type) {
            case 'backlog': return (<BacklogLine key={line.id} line={line}/>);
            case 'component': return (<ComponentLine key={line.id} line={line}/>);
            default: console.error("Invalid line type: " + line.type); return null;
          }
        })}
      </div>
    );
  }
}

export default Board;
