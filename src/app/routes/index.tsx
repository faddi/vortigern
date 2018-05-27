// import * as React from 'react';
// import { Route } from 'react-router';
import { App, Home, About, Counter, Stars } from '../containers';

// export default (
//   <Route path="/" component={App}>
//     <Route exact component={Home} />
//     <Route path="about" component={About} />
//     <Route path="counter" component={Counter} />
//     <Route path="stars" component={Stars} />
//   </Route>
// );

export const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/about',
        component: About,
      },
      {
        path: '/stars',
        component: Stars,
      },
      {
        path: '/counter',
        component: Counter,
      },
    ],
  },
];
