import { createSelector } from 'reselect';

const getCart = (state) => state.cart;

export const selectCurrentCartItem = createSelector(
  [getCart],
  (cart) => cart.currentCartItem
);

export const selectCurrentCartDropDownState = createSelector(
  [getCart],
  (cart) => cart.currentCartDropDownState
);

export const selectTotalCost = createSelector(
  [selectCurrentCartItem],
  (currentCartItem) => {
    return currentCartItem
      .reduce((total, item) => {
        return (total += item.quantity * item.price);
      }, 0)
      .toFixed(2);
  }
);
