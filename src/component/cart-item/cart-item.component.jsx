import { CartItemContainer, CartInfo } from './cart-item.styles.js';

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <CartInfo>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </CartInfo>
    </CartItemContainer>
  );
};
export default CartItem;
