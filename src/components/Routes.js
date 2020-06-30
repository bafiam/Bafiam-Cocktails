import React, { Component } from 'react'
import { Router, Switch, Route } from "react-router-dom";

import Cocktails from './Cocktails'
import ItemCocktails from './ItemCocktails'
import history from '../actions/History';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Cocktails} />
                    <Route path="/cocktail" exact component={ItemCocktails} />
                    
                </Switch>
            </Router>
    )
  }
}
