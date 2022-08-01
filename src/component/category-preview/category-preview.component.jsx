import ProductCard from '../product-card/product-card.component';
import './category-preview.styles.scss';
import { useNavigate } from 'react-router-dom';

const CategoryPreview = ({ title, products }) => {
  const navigation = useNavigate();
  const navigateToCategory = () => {
    navigation(`/shop/${title}`);
  };
  return (
    <div className='preview-container'>
      <h2>
        <span onClick={navigateToCategory} className='title-nav'>
          {title.toUpperCase()}
        </span>
      </h2>
      <div className='preview'>
        {products
          .filter((_, index) => index < 4)
          .map((prod) => {
            return <ProductCard product={prod} />;
          })}
      </div>
    </div>
  );
};
export default CategoryPreview;
