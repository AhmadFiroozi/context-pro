import { createContext, useState } from "react";

export const AppContext = createContext();
function AppProvider({ children }) {
  const [addToCart, setAddToCart] = useState(0);
  const [addedProduct, setAddedProduct] = useState([]);
  const valueContext = {
    addToCart,
    setAddToCart,
    addedProduct,
    setAddedProduct,
  };
  return (
    <AppContext.Provider value={valueContext}>{children}</AppContext.Provider>
  );
}

export default AppProvider;
