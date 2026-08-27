import { createContext, useContext } from "react";

/**
 * The context object and its hook live in a plain .js file (no components),
 * so React Fast Refresh keeps working during development.
 */
export const AppContext = createContext(null);

export function useCart() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useCart must be used inside <AppProvider>");
  }

  return context;
}
