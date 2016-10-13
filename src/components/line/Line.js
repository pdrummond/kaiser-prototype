import React, { Component } from 'react';
import * as State from '../../data/State.js';
import Column from '../column/Column';
import './Line.css';

class Line extends Component {

  render() {

    const {
      line: {
        title,
        expanded
      }
    } = this.props;

    return (
      <div className="Line">
        <p className="title" onClick={this.handleTitleClicked.bind(this)}>
          <i className={"fa " + (expanded?"fa-caret-down":"fa-caret-right")} style={{width:'12px'}}></i> {title}
        </p>
        <div className="columns" style={{display:(expanded?'flex':'none')}}>
          {this.props.line.columnIds.map( (columnId, index) => {
            const column = State.findColumn(columnId);
            return (<Column key={column.id} column={column} columnIndex={index} />);
          })}
        </div>
      </div>
    );
  }

  handleTitleClicked() {
    State.getReduxStore().dispatch({type: 'TOGGLE_LINE_EXPANDED', lineId: this.props.line.id});
  }
}

export default Line;
