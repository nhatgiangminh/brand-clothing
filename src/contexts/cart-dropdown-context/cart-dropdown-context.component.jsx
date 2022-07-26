import { createContext, useState } from 'react';

//add product to cart drop down
export const CartDropDownContext = createContext({
  currentCartDropDownState: true,
  setCurrentCartDropDownState: () => null,
  currentProductInCart: [],
});

//Cart drop down provider
export const CartDropDownProvider = ({ children }) => {
  const [currentCartDropDownState, setCurrentCartDropDownState] =
    useState(true);

  const [currentProductInCart, setCurrentProductInCart] = useState();
  const value = { currentCartDropDownState, setCurrentCartDropDownState };
  console.log(currentCartDropDownState);
  return (
    <CartDropDownContext.Provider value={value}>
      {children}
    </CartDropDownContext.Provider>
  );
};
