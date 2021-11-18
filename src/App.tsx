// ///<reference path="T/app.d.ts" />

import type { Component } from 'solid-js';
import { useRoutes } from 'solid-app-router';
import Header from 'Comps/Header';
import Footer from 'Comps/Footer';
import routes from '@/routes';

const App: Component = () => {
  const Routes = useRoutes(routes);
  return (
    <>
      <Header />
      <main><Routes /></main>
      <Footer />
    </>
  );
};

export default App;
