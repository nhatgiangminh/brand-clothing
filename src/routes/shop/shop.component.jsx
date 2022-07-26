import { useContext } from 'react';
import { ProductContext } from '../../contexts/product-context/product-context.component';
import ProductCard from '../../component/product-card/product-card.component';
import './shop.styles.scss';

const Shop = () => {
  const { productData } = useContext(ProductContext);
  return (
    <div className='product-container'>
      {productData.map((prod) => {
        return <ProductCard product={prod} />;
      })}
    </div>
  );
};
export default Shop;
