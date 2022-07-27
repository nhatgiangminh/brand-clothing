import { createContext, useState } from 'react';

//cart context
export const CartDropDownContext = createContext({
  currentCartDropDownState: false,
  setCurrentCartDropDownState: () => null,
  currentCartItem: [],
  setCurrentCartItem: () => null,
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

//Cart drop down provider component
export const CartDropDownProvider = ({ children }) => {
  const [currentCartDropDownState, setCurrentCartDropDownState] =
    useState(false);

  const [currentCartItem, setCurrentCartItem] = useState([]);
  //add to cart
  const addToCart = (productToAdd) => {
    setCurrentCartItem(addToCartHandle(productToAdd, currentCartItem));
  };
  //value
  const value = {
    currentCartDropDownState,
    setCurrentCartDropDownState,
    currentCartItem,
    addToCart,
  };

  return (
    <CartDropDownContext.Provider value={value}>
      {children}
    </CartDropDownContext.Provider>
  );
};
