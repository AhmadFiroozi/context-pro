import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/home/HomePage";
import CartPage from "./pages/cart/Cartpage";

function NotFound() {
  return (
    <div className="notFound">
      <h1>404</h1>
      <p>This page does not exist.</p>
      <Link to="/" className="btn btn-primary">
        Back to the store
      </Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
