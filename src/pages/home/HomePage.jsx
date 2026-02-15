import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import ProductList from "../../components/productList/ProductList";
import "./HomePage.css";
function HomePage() {
  return (
    <>
      <Navbar />
      <ProductList />
      <Footer />
    </>
  );
}

export default HomePage;
