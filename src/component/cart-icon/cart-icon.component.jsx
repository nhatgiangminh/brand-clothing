import {
  CartIconContainer,
  ShoppingBadge,
  CartBadge,
} from './cart-icon.styles.js';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartDropDownContext } from '../../contexts/cart-dropdown-context.component';

const CartIcon = () => {
  const {
    currentCartDropDownState,
    setCurrentCartDropDownState,
    currentCartItem,
  } = useContext(CartDropDownContext);
  const toggleDropDown = () => {
    setCurrentCartDropDownState(!currentCartDropDownState);
  };

  return (
    <CartIconContainer>
      <ShoppingBadge onClick={toggleDropDown} />
      <CartBadge>{currentCartItem.length}</CartBadge>
    </CartIconContainer>
  );
};
export default CartIcon;
