import "./productItemInCart.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useCart } from "../context/cartContext";

function ProductItemInCart({ id, name, price, image, count }) {
  const { increaseCount, decreaseCount, removeFromCart } = useCart();

  return (
    <div className="productItemInCart">
      <div className="cardLeft">
        <img src={image} alt={name} />
      </div>

      <div className="cardMiddle">
        {count > 1 ? (
          <button onClick={() => decreaseCount(id)} aria-label="Decrease quantity">
            −
          </button>
        ) : (
          <button onClick={() => removeFromCart(id)} aria-label="Remove item">
            <RiDeleteBin6Line />
          </button>
        )}

        <span>{count}</span>

        <button onClick={() => increaseCount(id)} aria-label="Increase quantity">
          +
        </button>
      </div>

      <div className="cardRight">
        <h5>{name}</h5>
        <p>{(price * count).toLocaleString()} Toman</p>
      </div>
    </div>
  );
}

export default ProductItemInCart;
