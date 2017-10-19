import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

import store, { history } from './store';
import AppContainer from './containers/AppContainer';
import ListContainer from './containers/ListContainer';

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ AppContainer } >
        <Route path="list(/:id)" component={ ListContainer } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
