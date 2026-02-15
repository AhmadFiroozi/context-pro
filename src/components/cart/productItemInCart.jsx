import "./ProductItemInCart.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

function ProductItemInCart({ id, name, price, image, count, totalPrice }) {
  const { addToCart, setAddToCart, addedProduct, setAddedProduct } =
    useContext(AppContext);
  const decreaseHandler = () => {
    const updateAddedProducts = [...addedProduct];
    updateAddedProducts.map((product) => {
      if (product.id === id) {
        product.count -= 1;
        product.totalPrice = product.count * product.price;
        setAddedProduct(updateAddedProducts);
      }
    });
  };
  const increaseHandler = () => {
    const updateAddedProducts = [...addedProduct];
    updateAddedProducts.map((product) => {
      if (product.id === id) {
        product.count += 1;
        product.totalPrice = product.count * product.price;
        setAddedProduct(updateAddedProducts);
      }
    });
  };
  const removeHandler = () => {
    const updateAddedProducts = addedProduct.filter(
      (product) => product.id !== id
    );
    setAddedProduct(updateAddedProducts);
    setAddToCart(addToCart - 1);
  };
  return (
    <div className="productItemInCart">
      <div className="cardLeft">
        <img src={image} />
      </div>

      <div className="cardMiddle">
        {count > 1 ? (
          <button onClick={decreaseHandler}>-</button>
        ) : (
          <button onClick={removeHandler}>
            <RiDeleteBin6Line />
          </button>
        )}
        <span>{count}</span>
        <button onClick={increaseHandler}>+</button>
      </div>

      <div className="cardRight">
        <h5>{name}</h5>
        <p>price : {totalPrice.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default ProductItemInCart;
