import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuthStore } from "~/store/authStore";

import Footer from "~/components/Footer/Footer";
import Navbar from "~/components/Navbar/Navbar";

import About from "~/pages/About/About";
import Login from "~/pages/Auth/Login/Login";
import Register from "~/pages/Auth/Register/Register";
import Contact from "~/pages/Contact/Contact";
import Home from "~/pages/Home/Home";
import Panel from "~/pages/Panel/Panel";

const AppRouter = () => {
  const user = useAuthStore((state) => state.user);
  const userClaims = useAuthStore((state) => state.userClaims);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const hideLayout = location.pathname.includes("/panel");

  if (loading) return null;

  return (
    <div className="min-h-screen flex flex-col">
      {!hideLayout && <Navbar />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/panel" element={<Panel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
};

export default AppRouter;
