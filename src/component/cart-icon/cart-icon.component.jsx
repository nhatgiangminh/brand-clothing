import {
  CartIconContainer,
  ShoppingBadge,
  CartBadge,
} from './cart-icon.styles.js';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  selectCurrentCartItem,
  selectCurrentCartDropDownState,
} from '../../store/cart/cart.selector.js';
import { setCurrentCartDropDownState } from '../../store/cart/cart.action.js';

const CartIcon = () => {
  const dispatch = useDispatch();
  const currentCartItem = useSelector(selectCurrentCartItem);
  const currentCartDropDownState = useSelector(selectCurrentCartDropDownState);

  const toggleDropDown = () => {
    dispatch(setCurrentCartDropDownState(currentCartDropDownState));
  };

  return (
    <CartIconContainer>
      <ShoppingBadge onClick={toggleDropDown} />
      <CartBadge>{currentCartItem && currentCartItem.length}</CartBadge>
    </CartIconContainer>
  );
};
export default CartIcon;
