import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import * as State from './data/State';

ReactDOM.render(
  <Provider store={State.getReduxStore()}>
      <App />
  </Provider>,
  document.getElementById('root')
);
