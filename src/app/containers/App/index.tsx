import appConfig from '../../../../config/main';

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from '../../components';
import { renderRoutes } from 'react-router-config';
import { routes } from '../../routes';

const style = require('./style.css');

class App extends React.Component {
  public render() {
    return (
      <section className={style.AppContainer}>
        <Helmet {...appConfig.app} {...appConfig.app.head} />
        <Header />
        {this.props.children}
        {renderRoutes(routes[0].routes)}
      </section>
    );
  }
}

export { App };
