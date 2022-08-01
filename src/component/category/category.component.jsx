import './category.styles.scss';
import { useParams } from 'react-router-dom';
import { CategoryContext } from '../../contexts/category-context.component';
import { useContext, useEffect, useState } from 'react';
import ProductCard from '../product-card/product-card.component';

const Category = () => {
  const { category } = useParams();
  const { categories } = useContext(CategoryContext);
  const [products, setProducts] = useState(categories[category]);
  useEffect(() => {
    setProducts(categories[category]);
  }, [categories, category]);

  return (
    <>
      <h2>{category.toUpperCase()}</h2>
      <div className='product-category-container'>
        {products &&
          products.map((prod) => {
            return <ProductCard key={prod.id} product={prod} />;
          })}
      </div>
    </>
  );
};
export default Category;
