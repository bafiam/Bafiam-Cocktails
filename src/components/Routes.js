import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Cocktails from './Cocktails';
import ItemCocktails from './ItemCocktails';

const Routes = () => (
  <Router>
    <Navbar />

    <Route path="/" exact component={Cocktails} />
    <Route path="/cocktail/:id" exact component={ItemCocktails} />

  </Router>
);
export default Routes;
