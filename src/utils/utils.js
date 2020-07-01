import axios from 'axios';

import { fetchCategory, fetchCocktailByCategory } from '../actions/index';

export const fetchAllCategories = () => dispatch => axios({
  method: 'GET',
  url: 'https://the-cocktail-db.p.rapidapi.com/list.php',
  headers: {
    'content-type': 'application/octet-stream',
    'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
    'x-rapidapi-key': '4823c0e453msh880ff1391e635c2p163ad2jsn0031468c3493',
    useQueryString: true,
  },
  params: {
    c: 'list',
  },
})
  .then(response => dispatch(fetchCategory(response.data)))
  .catch(error => {
    throw error;
  });

export const fetchAllCocktailByCategory = () => dispatch => {
  const allCategories = [
    'Ordinary Drink',
    'Cocktail',
    'Milk / Float / Shake',
    'Other/Unknown',
    'Cocoa',
    'Shot',
    'Coffee / Tea',
    'Homemade Liqueur',
    'Punch / Party Drink',
    'Beer',
    'Soft Drink / Soda',
  ];
  return allCategories.map(category => axios({
    method: 'GET',
    url: 'https://the-cocktail-db.p.rapidapi.com/filter.php',
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
      'x-rapidapi-key':
            '4823c0e453msh880ff1391e635c2p163ad2jsn0031468c3493',
      useQueryString: true,
    },
    params: {
      c: category,
    },
  })
    .then(response => dispatch(
      fetchCocktailByCategory([category, response.data.drinks]),
    ))
    .catch(error => {
      throw error;
    }));
};

export const filterCategory = props => {
  const { filter, cocktails } = props;
  if (cocktails && filter === 'ALL') {
    return cocktails;
  }
  return cocktails.map(cocktail => {
    if (cocktail[0] === filter) {
      return cocktail;
    }
    return [];
  });
};
