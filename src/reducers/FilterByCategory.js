import { FILTER_BY_CATEGORY } from "../actions/types";

const FilterByCategoryReducer = (state = "ALL", action) => {
  switch (action.type) {
    case FILTER_BY_CATEGORY:
      return action.category;
    default:
      return state;
  }
};
export default FilterByCategoryReducer;
