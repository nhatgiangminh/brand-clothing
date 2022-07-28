import Button from '../button/button.component';
import './cart-dropdown.styles.scss';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartDropDownContext } from '../../contexts/cart-dropdown-context.component';
import CartItem from '../cart-item/cart-item.component';

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
        <div className='cart-dropdown-container'>
          <div className='cart-items-container'>
            {currentCartItem.map((cart) => (
              <CartItem key={cart.id} cartItem={cart} />
            ))}
          </div>
          <Button onClick={navigateToCheckout}>GO TO CHECKOUT</Button>
        </div>
      ) : null}
    </>
  );
};
export default CartDropDown;
