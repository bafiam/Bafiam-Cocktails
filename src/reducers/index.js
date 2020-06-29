import { combineReducers } from 'redux';
import cocktailReducer from './Cocktails';
import categoryReducer from './Category'

const rootReducer = combineReducers({
  cocktails: cocktailReducer,
  categories: categoryReducer
});

export default rootReducer;