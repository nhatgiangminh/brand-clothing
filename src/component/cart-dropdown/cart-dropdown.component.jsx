import {
  CartDropDownContainer,
  CartItemContainer,
} from './cart-dropdown.styles.js';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartDropDownContext } from '../../contexts/cart-dropdown-context.component';
import CartItem from '../cart-item/cart-item.component';
import { BUTTON_TYPES, Button } from '../button/button.component';

const CartDropDown = () => {
  const {
    currentCartDropDownState,
    currentCartItem,
    setCurrentCartDropDownState,
  } = useContext(CartDropDownContext);
  console.log(currentCartItem);

  const navigation = useNavigate();
  const navigateToCheckout = () => {
    navigation('/check-out');
    setCurrentCartDropDownState(!currentCartDropDownState);
  };

  return (
    <>
      {currentCartDropDownState ? (
        <CartDropDownContainer>
          <CartItemContainer>
            {currentCartItem.map((cart) => (
              <CartItem key={cart.id} cartItem={cart} />
            ))}
          </CartItemContainer>
          <Button buttonType={BUTTON_TYPES.base} onClick={navigateToCheckout}>
            GO TO CHECKOUT
          </Button>
        </CartDropDownContainer>
      ) : null}
    </>
  );
};
export default CartDropDown;
