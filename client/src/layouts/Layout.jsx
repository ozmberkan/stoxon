import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const hideLayout =
    location.pathname.includes("/kayit") ||
    location.pathname.includes("/giris");

  return (
    <>
      {!hideLayout && <Navbar />}
      <Outlet />
      {!hideLayout && <Footer />}
    </>
  );
};

export default Layout;
