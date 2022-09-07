import { CheckoutItemRow, RemoveSVG } from './checkout-item.styles';
import { useSelector, useDispatch } from 'react-redux';
import {
  addToCart,
  quantityDecre,
  removeCartItem,
} from '../../store/cart/cart.action';
import { selectCurrentCartItem } from '../../store/cart/cart.selector';

const CheckoutItem = ({ checkoutItem }) => {
  const { name, quantity, imageUrl, price } = checkoutItem;
  const dispatch = useDispatch();
  const currentCartItem = useSelector(selectCurrentCartItem);

  const quantityIncre = () =>
    dispatch(addToCart(currentCartItem, checkoutItem));
  const quantityDecreHandler = () =>
    dispatch(quantityDecre(currentCartItem, checkoutItem));
  const removeItem = () =>
    dispatch(removeCartItem(currentCartItem, checkoutItem));
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
