import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartDropDownContext } from '../../contexts/cart-dropdown-context.component';

const CartIcon = () => {
  const { currentCartDropDownState, setCurrentCartDropDownState } =
    useContext(CartDropDownContext);
  const toggleDropDown = () => {
    setCurrentCartDropDownState(!currentCartDropDownState);
  };

  return (
    <div className='cart-icon-container'>
      <ShoppingIcon className='shopping-icon' onClick={toggleDropDown} />
      <span className='cart-badge'>0</span>
    </div>
  );
};
export default CartIcon;
