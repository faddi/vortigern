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

const entry = (
  <Provider store={store} key="provider">
    <ConnectedRouter history={history}>{renderRoutes(routes)}</ConnectedRouter>
  </Provider>
);

if (process.env.NODE_ENV === 'production') {
  ReactDOM.hydrate(entry, document.getElementById('app'));
} else {
  // Gives expected behavior when developing
  // Example: updated className does not change as expected with hydrate.
  // WARNING: This could mask logic for true intended differences between client and server.
  // https://github.com/facebook/react/issues/10591
  // https://github.com/necolas/react-native-web/issues/918
  ReactDOM.render(entry, document.getElementById('app'));
}
