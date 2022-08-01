import { createContext, useState, useEffect } from 'react';

//cart context
export const CartDropDownContext = createContext({
  currentCartDropDownState: false,
  setCurrentCartDropDownState: () => null,
  currentCartItem: [],
  setCurrentCartItem: () => null,
  totalCost: null,
});
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
//total cost function
const totalCostHandle = (currentCartItem) => {
  return currentCartItem
    .reduce((total, item) => {
      return (total += item.quantity * item.price);
    }, 0)
    .toFixed(2);
};

//Cart drop down provider component
export const CartDropDownProvider = ({ children }) => {
  //toggle cart dropdown state
  const [currentCartDropDownState, setCurrentCartDropDownState] =
    useState(false);
  //list of item in cart
  const [currentCartItem, setCurrentCartItem] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  //add to cart
  const addToCart = (productToAdd) => {
    setCurrentCartItem(addToCartHandle(productToAdd, currentCartItem));
  };
  //decrease cart's quantity
  const quantityDecre = (cartItem) =>
    setCurrentCartItem(quantityDecreHandle(cartItem, currentCartItem));
  //remove cart item
  const removeCartItem = (cartItem) =>
    setCurrentCartItem(removeCartItemHandle(cartItem, currentCartItem));
  //total cost
  useEffect(() => {
    setTotalCost(totalCostHandle(currentCartItem));
  }, [currentCartItem]);
  const value = {
    currentCartDropDownState,
    setCurrentCartDropDownState,
    currentCartItem,
    addToCart,
    quantityDecre,
    removeCartItem,
    totalCost,
  };

  return (
    <CartDropDownContext.Provider value={value}>
      {children}
    </CartDropDownContext.Provider>
  );
};
