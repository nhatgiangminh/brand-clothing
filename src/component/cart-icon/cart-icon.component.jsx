import {
  CartIconContainer,
  ShoppingBadge,
  CartBadge,
} from './cart-icon.styles.js';
import { useContext } from 'react';
import { CartDropDownContext } from '../../contexts/cart-dropdown-context.component';

const CartIcon = () => {
  const {
    currentCartDropDownState,
    setCurrentCartDropDownState,
    currentCartItem,
  } = useContext(CartDropDownContext);
  const toggleDropDown = () => {
    setCurrentCartDropDownState();
  };

  return (
    <CartIconContainer>
      <ShoppingBadge onClick={toggleDropDown}/>
      <CartBadge>{currentCartItem && currentCartItem.length}</CartBadge>
    </CartIconContainer>
  );
};
export default CartIcon;
