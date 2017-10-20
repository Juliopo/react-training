import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

import store, { history } from './store';
import AppContainer from './containers/AppContainer';
import ListContainer from './containers/ListContainer';
import EditContainer from './containers/EditContainer';

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ AppContainer } >
        <Route path="list" component={ ListContainer } />
        <Route path="edit/:id" component={ EditContainer } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
