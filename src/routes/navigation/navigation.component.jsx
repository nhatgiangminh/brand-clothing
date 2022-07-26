import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as LOGO } from '../../assets/crown.svg';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user-context.component';
import { logOut } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';
import CartDropDown from '../../component/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../component/cart-icon/cart-icon.component';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const signOut = async () => {
    await logOut();
  };
  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <LOGO className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOut}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/sign-in'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        <CartDropDown />
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
