import { combineReducers } from 'redux';
import cocktailReducer from './Cocktails';
import categoryReducer from './Category';
import FilterByCategoryReducer from './FilterByCategory';

const rootReducer = combineReducers({
  cocktails: cocktailReducer,
  categories: categoryReducer,
  filter: FilterByCategoryReducer,
});

export default rootReducer;
