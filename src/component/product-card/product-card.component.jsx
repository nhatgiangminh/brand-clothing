import { Button, BUTTON_TYPES } from '../button/button.component';
import { ProductCardContainer, ProductCardFooter } from './product-card.styles';
import { addToCart } from '../../store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentCartItem } from '../../store/cart/cart.selector';

const ProductCard = ({ product }) => {
  const { id, name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const currentCartItem = useSelector(selectCurrentCartItem);

  const addToCartEvent = () => dispatch(addToCart(currentCartItem, product));

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
