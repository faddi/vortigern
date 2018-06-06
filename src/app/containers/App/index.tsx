import appConfig from '../../../../config/main';

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from '../../components';
import { renderRoutes } from 'react-router-config';
import { routes } from '../../routes';
import { hot } from 'react-hot-loader';

const style = require('./style.css');

class AppC extends React.Component {
  public render() {
    return (
      <section className={style.AppContainer}>
        <Helmet {...appConfig.app} {...appConfig.app.head} />
        <Header />
        {renderRoutes(routes[0].routes)}
      </section>
    );
  }
}

export const App = hot(module)(AppC);
