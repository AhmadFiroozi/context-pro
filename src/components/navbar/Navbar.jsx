import "./Navbar.css";
import { BsCart4 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/AppContext";

function Navbar() {
  const { totalCount } = useCart();

  return (
    <nav>
      <p>
        <NavLink to="/">Home</NavLink>
      </p>

      <p className="bag">
        <NavLink to="/cart" aria-label="Shopping cart">
          <BsCart4 color="white" size="30px" />
        </NavLink>
        {totalCount > 0 && <span>{totalCount}</span>}
      </p>
    </nav>
  );
}

export default Navbar;
