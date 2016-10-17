import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory} from 'react-router'
import AppContainer from './AppContainer';
import './index.css';

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/(:boardKey)" component={AppContainer}/>
    </Router>,
  document.getElementById('root')
);
