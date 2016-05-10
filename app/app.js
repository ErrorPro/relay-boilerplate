import React from 'react';
import Relay from 'react-relay';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import routes from './routes';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import ReactRouterRelay from 'react-router-relay';
import { syncHistoryWithStore } from 'react-router-redux'
import Routes from './routes';
import storeFn from './createStore';

const store = storeFn();

render(
  <Provider store={store}>
    <Router
      history={syncHistoryWithStore(browserHistory, store)}
      render={applyRouterMiddleware(ReactRouterRelay)}
      environment={Relay.Store}
      routes={Routes}
    />
  </Provider>, document.getElementById('root')
)
