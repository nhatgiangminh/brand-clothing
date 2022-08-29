import CategoryPreview from '../../component/category-preview/category-preview.component';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../../store/category/category.selector';

const CategoriesPreview = () => {
  const categories = useSelector(selectCategories);
  return (
    <>
      {Object.keys(categories).map((title) => (
        <CategoryPreview
          key={title}
          title={title}
          products={categories[title]}
        />
      ))}
    </>
  );
};
export default CategoriesPreview;
