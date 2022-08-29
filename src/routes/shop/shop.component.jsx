import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { getCategoriesAndProducts } from '../../utils/firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { setCategories } from '../../store/category/category.action';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../../component/category/category.component';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoryMap = async () => {
      const categoriesMap = await getCategoriesAndProducts();
      dispatch(setCategories(categoriesMap));
    };
    getCategoryMap();
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};
export default Shop;
