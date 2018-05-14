/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import ProductsPage from './containers/ProductsPage';
import DetailsPage from './containers/DetailsPage';

export default () => (
  <App>
    <Switch>
      <Route path="/products/:category?" component={ProductsPage} />
      <Route path="/details/:category?/:id?" component={DetailsPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
