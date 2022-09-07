import CategoryPreview from '../../component/category-preview/category-preview.component';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/category/category.selector';

const CategoriesPreview = () => {
  const categories = useSelector(selectCategoriesMap);
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
