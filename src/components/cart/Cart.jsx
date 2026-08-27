import "./Cart.css";
import ProductItemInCart from "./productItemInCart";
import { useCart } from "../context/AppContext";

function Cart() {
  const { cartItems, totalCount, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cartContaner">
        <p>Your shopping cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cartContaner">
      {cartItems.map((product) => (
        <ProductItemInCart key={product.id} {...product} />
      ))}

      <div className="cartSummary">
        <span>
          Items: <strong>{totalCount}</strong>
        </span>
        <span>
          Total: <strong>{totalPrice.toLocaleString()} Toman</strong>
        </span>
      </div>
    </div>
  );
}

export default Cart;
