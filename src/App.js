import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoardPage from './pages/BoardPage';

class App extends Component {

  render() {
    console.log("App render() props:", this.props);
    return (
      <div className="App">
        <BoardPage boards={this.props.state.boards}/>
        <button onClick={this.handleClick.bind(this)}>BOOM</button>
      </div>
    );
  }

  handleClick() {
    this.props.dispatch({type: 'SET_CARD_TITLE', title:'BOOM'});    
  }
}


const mapStateToProps = (state) => {
  console.log("mapStateToProps", state);
  return {
    state
  }
}

export default App = connect(mapStateToProps)(App)
