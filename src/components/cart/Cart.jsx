import { useContext } from "react";
import "./Cart.css";
import ProductItemInCart from "./productIteminCart";
import { AppContext } from "../context/AppContext";
function Cart() {
  const { addToCart, addedProduct } = useContext(AppContext);
  return (
    <div className="cartContaner">
      {addToCart > 0 ? (
        <>
          {addedProduct.map((product) => (
            <ProductItemInCart key={product.id} {...product} />
          ))}
        </>
      ) : (
        <p> the shopping cart is empty </p>
      )}
    </div>
  );
}

export default Cart;
