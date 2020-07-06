import { FILTER_BY_CATEGORY, FETCH_CATEGORIES, FETCH_COCKTAILS } from './types';

const CHANGE_CATEGORY_FILTER = category => ({
  type: FILTER_BY_CATEGORY,
  category,
});

const fetchCategory = categories => ({
  type: FETCH_CATEGORIES,
  categories,
});
const fetchCocktailByCategory = cocktails => ({
  type: FETCH_COCKTAILS,
  cocktails,
});

export {
  CHANGE_CATEGORY_FILTER,
  fetchCategory,
  fetchCocktailByCategory,

};
