import Button from '../button/button.component';
import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { id, name, price, imageUrl } = product;
  return (
    <div className='product-card-container' key={id}>
      <img src={`${imageUrl}`} alt={`${name}`} />
      <Button buttonType={'inverted'}>ADD TO CART</Button>
      <div className='footer'>
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};
export default ProductCard;
