import { useContext, useState } from "react";
import "./Navbar.css";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Navbar() {
  const { addToCart, setAddToCart, addedProduct, setAddedProduct } =
    useContext(AppContext);
  return (
    <nav>
      <p>
        <Link to={"/"}>Home</Link>
      </p>

      <p className="bag">
        <Link to={"/cart"}>
          <BsCart4 color="white" size={"30px"} />
        </Link>
        {addToCart > 0 && <span>{addToCart}</span>}
      </p>
    </nav>
  );
}

export default Navbar;
