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
    const board = this.props.state.board;
    return (
      <div className="BoardPage">
        <div className="buttonMenu">
          <span style={{fontSize:'30px', color:'white', fontWeight:'100', position:'relative', top:'5px', marginRight:'20px'}}>{board.title}</span>
          <button onClick={this.handleNewLine.bind(this)}>New Line</button>
          <button onClick={this.clearBoard.bind(this)}>Clear Board</button>
          <button onClick={this.handleExpandAllLines.bind(this)}>Expand All Lines</button>
          <button onClick={this.handleCollapseAllLines.bind(this)}>Collapse All Lines</button>
          <button onClick={this.handleToggleLineSummaryBadges.bind(this)}>Toggle Line Summaries</button>
          <button onClick={this.handleSetCurrentUser.bind(this)}>Set Current User</button>
          <button onClick={this.exportBoard.bind(this)}>Export Board</button>
          <button onClick={this.handleLoadSampleData.bind(this)}>Load Sample Data</button>
          {/*<button onClick={this.handleLoadTestData.bind(this)}>Load Test Data</button>*/}
          {/*<button onClick={this.loadBoard.bind(this)}>Load Board</button>
          <input ref="fileInput" type='file'/>*/}
        </div>
        <Board state={this.props.state}/>
      </div>
    );
  }

  exportBoard() {
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

  clearBoard() {
    if(confirm("Are you sure?")) {
      State.getReduxStore().dispatch({type: 'NEW_BOARD'});
    }
  }

  handleNewLine() {
    const title = prompt("Enter line name");
    if(title && title.length > 0) {
      State.getReduxStore().dispatch({type: 'NEW_LINE', title});
    }
  }

  handleToggleLineSummaryBadges() {
    State.getReduxStore().dispatch({type: 'TOGGLE_LINE_SUMMARY_BADGES'});
  }

  handleExpandAllLines() {
    State.getReduxStore().dispatch({type: 'EXPAND_ALL_LINES'});
  }

  handleCollapseAllLines() {
    State.getReduxStore().dispatch({type: 'COLLAPSE_ALL_LINES'});
  }

  handleSetCurrentUser() {
    let username = prompt("Enter username: ", State.getState().client.currentUsername);
    if(username && username.length > 0) {
      State.getReduxStore().dispatch({type: 'SET_CURRENT_USER', username});
    }
  }

  handleLoadSampleData() {
    State.getReduxStore().dispatch({type: 'LOAD_SAMPLE_DATA'});
  }

  handleLoadTestData() {
    State.getReduxStore().dispatch({type: 'LOAD_TEST_DATA'});
  }
}

export default BoardPage;
