import { App, Home, About, Counter, Stars } from '../containers';

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
