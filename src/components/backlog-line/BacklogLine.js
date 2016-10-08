import React from 'react';
import Column from '../column/Column';
import Line from '../line/Line';
import '../line/Line.css';
import './BacklogLine.css';
import * as State from '../../data/State.js';

class BacklogLine extends Line {
  render() {

    const {
      line: {
        title
      }
    } = this.props;

    return (
      <div className="Line BacklogLine">
        <p className="title">{title}</p>
        <div className="columns">
          {this.props.line.columnIds.map( (columnId, index) => {
            const column = State.findColumn(columnId);
            return (<Column key={column.id} column={column} columnIndex={index} />);
          })}
        </div>
      </div>
    );
  }
}

export default BacklogLine;
