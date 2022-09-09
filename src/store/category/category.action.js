import { CATEGORIES_REDUCER_TYPES } from './category.types';
import { getCategoriesAndProducts } from '../../utils/firebase/firebase.utils';

export const fetchCategoriesStart = () => ({
  type: CATEGORIES_REDUCER_TYPES.FETCH_CATEGORIES_START,
  payload: null,
});

export const fetchCategoriesSuccess = (categoriesArray) => ({
  type: CATEGORIES_REDUCER_TYPES.FETCH_CATEGORIES_SUCCESS,
  payload: categoriesArray,
});

export const fetchCategoriesFailed = (error) => ({
  type: CATEGORIES_REDUCER_TYPES.FETCH_CATEGORIES_FAILED,
  payload: error,
});
//fetch API
export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoriesArray = await getCategoriesAndProducts();
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
