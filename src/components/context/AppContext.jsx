import { useState } from "react";
import { AppContext } from "./cartContext";

/**
 * Cart state lives here so any component can read or change it
 * without prop drilling.
 *
 * Every update returns a NEW array and NEW objects instead of mutating the
 * existing ones. React compares by reference, so mutating state in place can
 * skip re-renders and corrupt the original product data.
 */
function AppProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      }

      return [...prev, { ...product, count: 1 }];
    });
  };

  const increaseCount = (id) =>
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );

  // Dropping to zero removes the line instead of leaving an empty row
  const decreaseCount = (id) =>
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );

  const removeFromCart = (id) =>
    setCartItems((prev) => prev.filter((item) => item.id !== id));

  // Derived values — no extra state to keep in sync
  const totalCount = cartItems.reduce((sum, item) => sum + item.count, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  return (
    <AppContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseCount,
        decreaseCount,
        removeFromCart,
        totalCount,
        totalPrice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
