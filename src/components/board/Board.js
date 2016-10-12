import React, { Component } from 'react';
import BacklogLine from '../backlog-line/BacklogLine'
import ComponentLine from '../component-line/ComponentLine'
import './Board.css';

class Board extends Component {
  render() {
    return (
      <div className="Board">
        {this.props.lines.map( (line) => {
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
