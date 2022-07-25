import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as LOGO } from '../../assets/crown.svg';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user-context/user-context.component';
import { logOut } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const signOut = async () => {
    await logOut();
    setCurrentUser(null);
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
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
