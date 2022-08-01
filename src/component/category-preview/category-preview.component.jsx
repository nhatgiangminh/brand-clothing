import ProductCard from '../product-card/product-card.component';
import './category-preview.styles.scss';

const CategoryPreview = ({ title, products }) => {
  return (
    <div className='preview-container'>
      <h2>
        <span className='title-nav'>{title.toUpperCase()}</span>
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
