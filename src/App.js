import Home from './routes/home/home.component';
import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import CheckOut from './routes/checkout/checkout.component';
import { useEffect } from 'react';
import {
  authStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './store/user/user.action';
import Footer from './component/footer/footer.component';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = authStateChangedListener(async (user) => {
      if (user) {
        await createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='sign-in' element={<Authentication />} />
          <Route path='check-out' element={<CheckOut />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
