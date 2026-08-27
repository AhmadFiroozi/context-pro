import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";

/**
 * Navbar and Footer are rendered once here instead of being repeated
 * inside every page. <Outlet /> is where the matched route renders.
 */
function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
