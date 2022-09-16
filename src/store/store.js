import { createStore, compose, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { rootReducer } from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const middleWare = [
  process.env.NODE_ENV === 'development' && logger,
  thunk,
].filter(Boolean);

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};
//create persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
//apply middleware
const composeEnhancer = compose(applyMiddleware(...middleWare));

export const store = createStore(persistedReducer, undefined, composeEnhancer);

export const persistor = persistStore(store);
