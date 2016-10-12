import React, { Component } from 'react';
import Board from '../components/board/Board';
import * as State from '../data/State';
import './BoardPage.css'

class BoardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filename: 'board1.json'
    }
  }
  render() {
    //For now just pick out the first board.
    const board = this.props.boards[0];
    return (
      <div className="Board">
        <div className="buttonMenu">
          <span style={{fontSize:'20px', fontWeight:'bold'}}>{board.title}</span>
          <button onClick={this.newCard.bind(this)}>New Card</button>
          <button>New Board</button>
          <button onClick={this.saveBoard.bind(this)}>Save Board</button>
          <button onClick={this.loadBoard.bind(this)}>Load Board</button>
          <input ref="fileInput" type='file'/>
        </div>
        <Board board={board}/>
      </div>
    );
  }

  saveBoard() {
    const filename = prompt("Enter filename for board", this.state.filename);
    if(filename != null) {
      this.setState({filename});
      const content = JSON.stringify(State.getReduxStore().getState(), null, 2);
      const mime = 'application/json';

      var blob = new Blob([content], { type: mime })

      var a = document.createElement('a')
      a.download = filename
      a.href = window.URL.createObjectURL(blob)
      a.dataset.downloadurl = [mime, a.download, a.href].join(':')

      var e = document.createEvent('MouseEvents')
      e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
      return a.dispatchEvent(e)
    }
  }

  loadBoard() {
    var file, fr;

    if (typeof window.FileReader !== 'function') {
      alert("The file API isn't supported on this browser yet.");
      return;
    }

    const input = this.refs.fileInput;
    if (!input) {
      alert("Um, couldn't find the fileinput element.");
    }
    else if (!input.files) {
      alert("This browser doesn't seem to support the `files` property of file inputs.");
    }
    else if (!input.files[0]) {
      alert("Please select a file before clicking 'Load'");
    }
    else {
      file = input.files[0];
      fr = new FileReader();
      fr.onload = receivedText;
      fr.readAsText(file);
    }

    function receivedText(e) {
      let lines = e.target.result;
      var state = JSON.parse(lines);
      console.log("LOADED STATE: ", state);
      State.getReduxStore().dispatch({
        type: 'SET_STATE',
        state
      });
    }
  }

  newCard() {
    State.getReduxStore().dispatch({type: 'NEW_CARD'});
  }
}

export default BoardPage;
