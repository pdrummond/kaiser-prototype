import React from 'react';
import Column from '../column/Column';
import Line from '../line/Line';
import '../line/Line.css';
import './ComponentLine.css';

class ComponentLine extends Line {
  render() {

    const {
      line: {
        title
      }
    } = this.props;

    return (
      <div className="Line">
        <p className="title">{title}</p>
        <div className="columns">
          {this.props.line.columns.map( (column) => {
            return (<Column column={column}/>);
          })}
        </div>
      </div>
    );
  }
}

export default ComponentLine;
