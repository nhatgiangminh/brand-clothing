import { CategoryContainer, CategoryTitle } from './category.styles';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/category/category.selector';
import ProductCard from '../product-card/product-card.component';

const Category = () => {
  const { category } = useParams();
  const categories = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categories[category]);
  useEffect(() => {
    setProducts(categories[category]);
  }, [categories, category]);

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((prod) => {
            return <ProductCard key={prod.id} product={prod} />;
          })}
      </CategoryContainer>
    </>
  );
};
export default Category;
