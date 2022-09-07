import { CART_REDUCER_TYPES } from './cart.types';

const INITIAL_STATE = {
  currentCartDropDownState: false,
  currentCartItem: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_REDUCER_TYPES.SET_CART_ITEM:
      return { ...state, currentCartItem: payload };
    case CART_REDUCER_TYPES.SET_CART_DROPDOWN:
      return { ...state, currentCartDropDownState: payload };
    default:
      return state;
  }
};
