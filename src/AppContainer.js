import React, { Component } from 'react';
import { Provider } from 'react-redux';
import * as State from './data/State';
import App from './App';

class AppContainer extends Component {

  render() {
    return (
      <Provider store={State.createReduxStore(this.props.params.boardKey)}>
      <App/>
      </Provider>
    );
  }
}

export default AppContainer;
