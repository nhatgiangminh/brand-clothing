import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as LOGO } from '../../assets/crown.svg';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { logOut } from '../../utils/firebase/firebase.utils';
import CartDropDown from '../../component/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../component/cart-icon/cart-icon.component';
import {
  NavigationContainer,
  NavLinksContainer,
  NavLink,
} from './navigation.styles.js';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const signOut = async () => {
    await logOut();
  };
  return (
    <>
      <NavigationContainer>
        <Link to='/'>
          <LOGO />
        </Link>
        <NavLinksContainer>
          <NavLink to='/shop'>SHOP</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOut}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/sign-in'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        <CartDropDown />
      </NavigationContainer>
      <Outlet />
    </>
  );
};
export default Navigation;
