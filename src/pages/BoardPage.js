import React, { Component } from 'react';
import Board from '../components/board/Board'
import './BoardPage.css'

class BoardPage extends Component {
  render() {
    //For now just pick out the first board.
    const board = this.props.boards[0];
    return (
      <div className="Board">
        <Board board={board}/>
      </div>
    );
  }
}

export default BoardPage;
