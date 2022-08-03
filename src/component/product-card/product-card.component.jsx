import { Button, BUTTON_TYPES } from '../button/button.component';
import { ProductCardContainer, ProductCardFooter } from './product-card.styles';
import { CartDropDownContext } from '../../contexts/cart-dropdown-context.component';
import { useContext } from 'react';

const ProductCard = ({ product }) => {
  const { id, name, price, imageUrl } = product;
  const { addToCart } = useContext(CartDropDownContext);

  const addToCartEvent = () => addToCart(product);

  return (
    <ProductCardContainer key={id}>
      <img src={`${imageUrl}`} alt={`${name}`} />
      <Button buttonType={BUTTON_TYPES.inverted} onClick={addToCartEvent}>
        ADD TO CART
      </Button>
      <ProductCardFooter>
        <p>{name}</p>
        <p>{price}</p>
      </ProductCardFooter>
    </ProductCardContainer>
  );
};
export default ProductCard;
