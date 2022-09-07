import { createStore, compose, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { rootReducer } from './root-reducer';

const middleWare = [logger];

const composeEnhancer = compose(applyMiddleware(...middleWare));
export const store = createStore(rootReducer, undefined, composeEnhancer);
