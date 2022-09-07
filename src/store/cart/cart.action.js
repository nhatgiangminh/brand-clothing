import { CART_REDUCER_TYPES } from './cart.types';
//-----------------ACTIONS-----------------
export const setCartItems = (cartItems) => ({
  type: CART_REDUCER_TYPES.SET_CART_ITEM,
  payload: cartItems,
});
export const setCurrentCartDropDownState = (currentCartDropDownState) => ({
  type: CART_REDUCER_TYPES.SET_CART_DROPDOWN,
  payload: !currentCartDropDownState,
});

//-----------------METHOD------------------

//add to cart function
const addToCartHandle = (product, cartItems) => {
  const existingCartItem = cartItems.find((item) => item.id === product.id);

  if (existingCartItem) {
    console.log('cartiem da ton tai');
    return cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...product, quantity: 1 }];
};
// quantity decrement
const quantityDecreHandle = (cartItem, currentCartItem) => {
  if (cartItem.quantity > 1) {
    console.log('cart decre > 1');
    return currentCartItem.map((item) =>
      item.id === cartItem.id ? { ...item, quantity: item.quantity - 1 } : item
    );
  } else return [...currentCartItem];
};
//remove cart item
const removeCartItemHandle = (cartItem, currentCartItem) => {
  return currentCartItem.filter((item) => {
    return cartItem.id === item.id ? false : true;
  });
};

//--------------- Create action -------------
//add to cart
export const addToCart = (currentCartItem, productToAdd) => {
  const newCartItems = addToCartHandle(productToAdd, currentCartItem);
  return setCartItems(newCartItems);
};
//decrease cart's quantity
export const quantityDecre = (currentCartItem, cartItem) => {
  const newCartItems = quantityDecreHandle(cartItem, currentCartItem);
  return setCartItems(newCartItems);
};
//remove cart item
export const removeCartItem = (currentCartItem, cartItem) => {
  const newCartItems = removeCartItemHandle(cartItem, currentCartItem);
  return setCartItems(newCartItems);
};
