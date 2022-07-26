import { useState, createContext, useEffect } from 'react';
import PRODUCTS from '../shop-data.json';

export const ProductContext = createContext({
  productData: [],
  setProductData: () => null,
});

export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState(PRODUCTS);

  const value = { productData, setProductData };
  useEffect(() => {});
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
