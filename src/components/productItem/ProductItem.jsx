import "./ProductItem.css";
import { useCart } from "../context/AppContext";

function ProductItem({ id, name, price, image }) {
  const { addToCart, cartItems } = useCart();

  const inCart = cartItems.find((item) => item.id === id);

  return (
    <div className="productCard">
      <div className="productImage">
        <img className="img-fluid" src={image} alt={name} loading="lazy" />
      </div>

      <div className="cardBody">
        <h5>{name}</h5>
        <p className="price">{price.toLocaleString()} Toman</p>

        <button
          onClick={() => addToCart({ id, name, price, image })}
          className="btn btn-primary"
        >
          {inCart ? `In cart (${inCart.count})` : "Add to cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
