import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import Cocktails from './Cocktails';
import ItemCocktails from './ItemCocktails';
import history from '../actions/History';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Cocktails} />
      <Route path="/cocktail/:id" exact component={ItemCocktails} />

    </Switch>
  </Router>
);
export default Routes;
