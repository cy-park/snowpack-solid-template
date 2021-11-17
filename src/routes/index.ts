import { lazy } from 'solid-js';
import Home from 'Pages/Home';
import Counter from 'Pages/Counter';
import API from 'Pages/Api';
import NotFound from 'Pages/404';

const routes: Array = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/user',
    component: lazy(() => import('Pages/User')),
    data: () => ({
      lastName: {
        jane: 'Janeson',
        john: 'Johnson',
      }
    }),
  },
  {
    path: '/user/:id',
    component: lazy(() => import('Pages/User')),
  },
  {
    path: '/counter',
    component: Counter,
  },
  {
    path: '/api',
    component: API,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default routes;
