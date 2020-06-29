import { combineReducers } from 'redux';
import cocktailReducer from './Cocktails';


const rootReducer = combineReducers({
  cocktails: cocktailReducer,
});

export default rootReducer;