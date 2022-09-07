import { CATEGORIES_REDUCER_TYPES } from './category.types';

const INIT_STATE = {
  categories: [],
};

export const categoriesReducer = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_REDUCER_TYPES.SET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};
