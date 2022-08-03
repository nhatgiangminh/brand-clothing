import { CheckoutItemRow, RemoveSVG } from './checkout-item.styles';
import { CartDropDownContext } from '../../contexts/cart-dropdown-context.component';
import { useContext } from 'react';

const CheckoutItem = ({ checkoutItem }) => {
  const { name, quantity, imageUrl, price } = checkoutItem;

  const { addToCart, quantityDecre, removeCartItem } =
    useContext(CartDropDownContext);

  const quantityIncre = () => addToCart(checkoutItem);
  const quantityDecreHandler = () => quantityDecre(checkoutItem);
  const removeItem = () => removeCartItem(checkoutItem);
  return (
    <CheckoutItemRow>
      <td>
        <img src={imageUrl} alt={name}></img>
      </td>
      <td>{name}</td>
      <td>
        <span onClick={quantityDecreHandler}>{'<'}</span>
        {quantity}
        <span onClick={quantityIncre}>{'>'}</span>
      </td>
      <td>{price * quantity}$</td>
      <td>
        <RemoveSVG onClick={removeItem} />
      </td>
      {/* <td >add</td>
      <td >reduce</td>
      <td onClick={removeItem}>remove</td> */}
    </CheckoutItemRow>
  );
};
export default CheckoutItem;
