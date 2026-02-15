import "./ProductItem.css";
import ProductsList from "../../db";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
function ProductItem({ id, name, price, image }) {
  const { addToCart, setAddToCart, addedProduct, setAddedProduct } =
    useContext(AppContext);
  const addToCartbtn = () => {
    const isProductExistInCart = () => {
      return addedProduct.some((product) => product.id == id);
    };
    if (isProductExistInCart()) {
      const updateAddedProduct = [...addedProduct];
      updateAddedProduct.map((product) => {
        if (product.id == id) {
          product.count += 1;
          product.totalPrice = product.count * product.price;
        }
        setAddedProduct(updateAddedProduct);
        return;
      });
    } else {
      setAddToCart(addToCart + 1);
      const product = ProductsList.find((product) => product.id == id);
      product.count = 1;
      product.totalPrice = product.count * product.price;
      setAddedProduct((pervState) => [...pervState, product]);
    }
  };
  return (
    <div className="productCard">
      <div className="productImage">
        <img className="img-fluid" src={image} />
      </div>
      <div className="cardBody">
        <h5> {name}</h5>
        <p className="price">price:{price.toLocaleString()}</p>
        <button onClick={addToCartbtn} className="btn btn-primary">
          add to cart
        </button>
      </div>
    </div>
  );
}
export default ProductItem;
