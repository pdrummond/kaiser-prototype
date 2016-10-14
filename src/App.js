import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoardPage from './pages/BoardPage';
import CardPage from './pages/CardPage';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import './App.css';
import './theme/BlueTheme.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        {this.renderCurrentPage()}
      </div>
    );
  }

  renderCurrentPage() {
    const currentPage = this.props.state.client ? this.props.state.client.page.current : 'board';
    const cardId = this.props.state.client ? this.props.state.client.page.cardId : null;
    const columnId = this.props.state.client ? this.props.state.client.page.columnId : null;

    switch(currentPage) {
      case 'board': return (<BoardPage boards={this.props.state.boards} lines={this.props.state.lines}/>);
      case 'card': return (<CardPage columnId={columnId} cardId={cardId}/>);
      default: console.error("Unknown page: " + currentPage);
    }
  }
}


const mapStateToProps = (state) => {
  return {
    state
  }
}

App = connect(mapStateToProps)(App)
export default DragDropContext(HTML5Backend)(App);
