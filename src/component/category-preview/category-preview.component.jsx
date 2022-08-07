import ProductCard from '../product-card/product-card.component';
import {
  PreviewCategory,
  NavLink,
  ProductPreview,
} from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
  return (
    <PreviewCategory>
      <NavLink to={title}>{title.toUpperCase()}</NavLink>
      <ProductPreview>
        {products
          .filter((_, index) => index < 4)
          .map((prod) => {
            return <ProductCard key={prod.id} product={prod} />;
          })}
      </ProductPreview>
    </PreviewCategory>
  );
};
export default CategoryPreview;
