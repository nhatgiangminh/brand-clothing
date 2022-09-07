import {
  CartDropDownContainer,
  CartItemContainer,
} from './cart-dropdown.styles.js';
import { useNavigate } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import { BUTTON_TYPES, Button } from '../button/button.component';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCurrentCartItem,
  selectCurrentCartDropDownState,
} from '../../store/cart/cart.selector.js';
import { setCurrentCartDropDownState } from '../../store/cart/cart.action.js';

const CartDropDown = () => {
  const dispatch = useDispatch();
  const currentCartItem = useSelector(selectCurrentCartItem);
  const currentCartDropDownState = useSelector(selectCurrentCartDropDownState);

  const navigation = useNavigate();
  const navigateToCheckout = () => {
    navigation('/check-out');
    dispatch(setCurrentCartDropDownState(!currentCartDropDownState));
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
