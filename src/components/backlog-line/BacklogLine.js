import React from 'react';
import Column from '../column/Column';
import Line from '../line/Line';
import '../line/Line.css';
import './BacklogLine.css';
import * as State from '../../data/State.js';

class BacklogLine extends Line {
  constructor(props) {
    super(props);
    this.state = {
      showColumns:true
    }
  }

  render() {

    const {
      line: {
        title
      }
    } = this.props;

    return (
      <div className="Line BacklogLine">
        <p className="title" onClick={()=>{this.setState({showColumns:!this.state.showColumns})}}>{title}</p>
        <div className="columns" style={{display:(this.state.showColumns?'flex':'none')}}>
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
