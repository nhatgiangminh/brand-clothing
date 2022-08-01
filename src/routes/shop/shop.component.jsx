import { useContext } from 'react';
import { CategoryContext } from '../../contexts/category-context.component';
import ProductCard from '../../component/product-card/product-card.component';
import './shop.styles.scss';

const Shop = () => {
  const { categories } = useContext(CategoryContext);
  return (
    <>
      {Object.keys(categories).map((title) => (
        <>
          <h3>{title}</h3>
          <div className='product-container'>
            {categories[title].map((prod) => {
              return <ProductCard product={prod} />;
            })}
          </div>
        </>
      ))}
    </>
  );
};
export default Shop;
