import * as e6p from 'es6-promise';
(e6p as any).polyfill();
import 'isomorphic-fetch';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
const { browserHistory } = require('react-router');

// import {} from 'react-router';

// import { syncHistoryWithStore } from 'react-router-redux';

import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
// import { ReduxAsyncConnect } from 'redux-connect';
// import { BrowserRouter } from 'react-router-dom';
import { routes } from './app/routes';

// const { ReduxAsyncConnect } = require('redux-connect');
import { configureStore } from './app/redux/store';

const store = configureStore(browserHistory, window.__INITIAL_STATE__);
const history = createBrowserHistory();
// const history = syncHistoryWithStore(browserHistory, store);
// const connectedCmp = props => <ReduxAsyncConnect {...props} />;

ReactDOM.hydrate(
  <Provider store={store} key="provider">
    <ConnectedRouter history={history}>{renderRoutes(routes)}</ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
