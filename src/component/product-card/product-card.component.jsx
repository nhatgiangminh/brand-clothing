import Button from '../button/button.component';
import './product-card.styles.scss';
import { CartDropDownContext } from '../../contexts/cart-dropdown-context.component';
import { useContext } from 'react';

const ProductCard = ({ product }) => {
  const { id, name, price, imageUrl } = product;
  const { addToCart } = useContext(CartDropDownContext);

  const addToCartEvent = () => addToCart(product);

  return (
    <div className='product-card-container' key={id}>
      <img src={`${imageUrl}`} alt={`${name}`} />
      <Button buttonType={'inverted'} onClick={addToCartEvent}>
        ADD TO CART
      </Button>
      <div className='footer'>
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};
export default ProductCard;
