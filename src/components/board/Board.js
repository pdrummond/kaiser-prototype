import React, { Component } from 'react';
import BacklogLine from '../backlog-line/BacklogLine';
import ComponentLine from '../component-line/ComponentLine';
import TestLine from '../test-line/TestLine';
import DoneLine from '../done-line/DoneLine';
import ScratchLine from '../scratch-line/ScratchLine';
import './Board.css';

class Board extends Component {
  render() {
    return (
      <div className="Board">
        <div className="lines">
        {this.props.lines.map( (line) => {
          switch(line.type) {
            case 'backlog': return (<BacklogLine key={line.id} line={line}/>);
            case 'component': return (<ComponentLine key={line.id} line={line}/>);
            case 'test': return (<TestLine key={line.id} line={line}/>);
            case 'done': return (<DoneLine key={line.id} line={line}/>);
            case 'scratch': return (<ScratchLine key={line.id} line={line}/>);
            default: console.error("Invalid line type: " + line.type); return null;
          }
        })}
        </div>
      </div>
    );
  }
}

export default Board;
