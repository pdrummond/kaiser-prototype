import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoardPage from './pages/BoardPage';
import CardPage from './pages/CardPage';
import MembersPage from './pages/members-page/MembersPage';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import './App.css';
import './theme/BlueTheme.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="TopBanner">
          <div>This is a prototype of <span style={{color:'white'}}>KAISER</span>. All data is persisted locally.  To create a new board, just add a key to the url,
            like "/board1" for example.
          </div>
        </div>

        <div className="AppInner">
          {this.renderCurrentPage()}
        </div>
      </div>
    );
  }

  renderCurrentPage() {
    const currentPage = this.props.state.client ? this.props.state.client.page.current : 'board';
    const cardId = this.props.state.client ? this.props.state.client.page.cardId : null;
    const columnId = this.props.state.client ? this.props.state.client.page.columnId : null;

    switch(currentPage) {
      case 'board': return (<BoardPage state={this.props.state}/>);
      case 'card': return (<CardPage columnId={columnId} cardId={cardId}/>);
      case 'members': return (<MembersPage members={this.props.state.board.members}/>);
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
