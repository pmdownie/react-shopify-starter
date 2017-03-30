/* @flow */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app/App';
import HomepageContainer from'./containers/homepageContainer/HomepageContainer';

const routesIndex = (
  <Route path="/" component={ App }>
    <IndexRoute component={ HomepageContainer } />
  </Route>
);

export default routesIndex;
