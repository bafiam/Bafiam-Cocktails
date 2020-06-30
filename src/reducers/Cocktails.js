import { FETCH_COCKTAILS } from "../actions/types";


const cocktailReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_COCKTAILS:
    console.log([...state, action.cocktails])
      return [...state, action.cocktails];
      
    default:
      return state;
  }
};

export default cocktailReducer;