import { useContext } from 'react';
import { CategoryContext } from '../../contexts/category-context.component';
import CategoryPreview from '../../component/category-preview/category-preview.component';

const CategoriesPreview = () => {
  const { categories } = useContext(CategoryContext);
  return (
    <>
      {Object.keys(categories).map((title) => (
        <CategoryPreview title={title} products={categories[title]} />
      ))}
    </>
  );
};
export default CategoriesPreview;
