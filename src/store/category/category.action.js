import { CATEGORIES_REDUCER_TYPES } from './category.types';

export const setCategories = (categoriesMap) => ({
  type: CATEGORIES_REDUCER_TYPES.SET_CATEGORIES,
  payload: categoriesMap,
});
