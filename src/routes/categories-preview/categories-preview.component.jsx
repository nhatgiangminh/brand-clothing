import CategoryPreview from '../../component/category-preview/category-preview.component';
import { useSelector } from 'react-redux';
import {
  selectCategoriesMap,
  selectIsLoading,
} from '../../store/category/category.selector';
import Spinner from '../../component/spinner/spinner.component';

const CategoriesPreview = () => {
  const categories = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categories).map((title) => (
          <CategoryPreview
            key={title}
            title={title}
            products={categories[title]}
          />
        ))
      )}
    </>
  );
};
export default CategoriesPreview;
