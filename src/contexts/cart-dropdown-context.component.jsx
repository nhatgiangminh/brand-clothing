import { createContext , useReducer,} from 'react';

//cart context
export const CartDropDownContext = createContext({
  currentCartDropDownState: false,
  setCurrentCartDropDownState: () => null,
  currentCartItem: [],
  setCurrentCartItem: () => null,
  totalCost: null,
});

const CART_REDUCER_TYPES = {
  SET_CART_ITEM : 'SET_CART_ITEM',
  SET_CART_DROPDOWN: 'SET_CART_DROPDOWN',
}
const cartReducer = (state, action) => {
  const { type, payload } = action;
  console.log('type',type);
  switch(type) {
    case 'SET_CART_ITEM' :
      return {...state, ...payload};
   case CART_REDUCER_TYPES.SET_CART_DROPDOWN :
     return {...state, ...payload};
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  };
}


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
// initial state for cart reducer
const INITIAL_STATE = {
  currentCartDropDownState: false,
  currentCartItem: [],
  totalCost: null,
};
//Cart drop down provider component
export const CartDropDownProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const {currentCartDropDownState, currentCartItem, totalCost} = state;

  const setCartItems = (newCartItems) => {
    const total = totalCostHandle(newCartItems);
    dispatch({
      type: 'SET_CART_ITEM', 
      payload: {
      currentCartItem: newCartItems,
      totalCost: total,
    }});
  };
  const setCurrentCartDropDownState = () => {
    dispatch({type: CART_REDUCER_TYPES.SET_CART_DROPDOWN, payload: {
      currentCartDropDownState: !currentCartDropDownState,
    }})
  }

  



  //add to cart
  const addToCart = (productToAdd) => {
    const newCartItems = addToCartHandle(productToAdd, currentCartItem);
    setCartItems(newCartItems);
  };
  //decrease cart's quantity
  const quantityDecre = (cartItem) => {
    const newCartItems = quantityDecreHandle(cartItem, currentCartItem);
    setCartItems(newCartItems);
  }
  //remove cart item
  const removeCartItem = (cartItem) => {
    const newCartItems = removeCartItemHandle(cartItem, currentCartItem);
    setCartItems(newCartItems);
  } 
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
