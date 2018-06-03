import 'babel-polyfill';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
const { browserHistory } = require('react-router');

import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { routes } from './app/routes';

import { configureStore } from './app/redux/store';

const store = configureStore(browserHistory, window.__INITIAL_STATE__);
const history = createBrowserHistory();

ReactDOM.hydrate(
  <Provider store={store} key="provider">
    <ConnectedRouter history={history}>{renderRoutes(routes)}</ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
