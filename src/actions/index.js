import { FILTER_BY_CATEGORY } from './types'
const CHANGE_CATEGORY_FILTER = category => ({
  type: FILTER_BY_CATEGORY ,
  category,
});

export {
  CHANGE_CATEGORY_FILTER
  
};