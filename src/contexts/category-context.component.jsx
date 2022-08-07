import { useState, createContext, useEffect } from 'react';
import { getCategoriesAndProducts } from '../utils/firebase/firebase.utils';

export const CategoryContext = createContext({
  categories: {},
  setCategorise: () => null,
});

export const CategoryProvider = ({ children }) => {
  const [categories, setCategorise] = useState({});

  const value = { categories, setCategorise };
  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCategoriesAndProducts();
      setCategorise(categoryMap);
    };
    getCategoryMap();
  }, []);
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
