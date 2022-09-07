import { createSelector } from 'reselect';

const getCategories = (state) => state.categories;

const selectCategories = createSelector(
  [getCategories],
  (categories) => categories.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categoriesMap) => {
    const categoryMap = categoriesMap.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
    return categoryMap;
  }
);
