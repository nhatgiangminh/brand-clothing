import Button from '../button/button.component';
import './cart-dropdown.styles.scss';
import { useContext } from 'react';
import { CartDropDownContext } from '../../contexts/cart-dropdown-context.component';

const CartDropDown = () => {
  const { currentCartDropDownState } = useContext(CartDropDownContext);

  return (
    <>
      {currentCartDropDownState ? (
        <div className='cart-dropdown-container'>
          <div className='cart-items'></div>
          <Button>GO TO CHECKOUT</Button>
        </div>
      ) : null}
    </>
  );
};
export default CartDropDown;
