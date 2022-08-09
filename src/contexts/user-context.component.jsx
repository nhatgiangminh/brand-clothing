import { createContext, useReducer, useEffect } from 'react';
import {
  authStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const USER_REDUCER_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
}

const userReducer = (action, state) => {
  const {type, payload} = action;
  console.log('dispatched');
  switch(type) {
    case USER_REDUCER_TYPES.SET_CURRENT_USER :
      return {...state, currentUser: payload};
    case undefined:
      return {...state, currentUser: null};
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
}

const initUser = {
  currentUser: null,
}

export const UserProvider = ({ children }) => {
  //const [currentUser, setCurrentUser] = useState(null);
  const [state, dispatch] = useReducer(userReducer, initUser);

  const {currentUser} = state;
  //console.log(state);


  const setCurrentUser = (user) => {
    dispatch({type: USER_REDUCER_TYPES.SET_CURRENT_USER, payload: user});
  }

  useEffect(() => {
    const unsubscribe = authStateChangedListener(async (user) => {
      if (user) {
        await createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
