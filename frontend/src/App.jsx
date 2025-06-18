import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuthStore } from "./store/authStore";

import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Panel from "./pages/Panel/Panel";

const App = () => {
  const user = useAuthStore((state) => state.user);
  const userClaims = useAuthStore((state) => state.userClaims);

  const [loading, setLoading] = useState(false);

  if (loading) return null;

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/panel" element={<Panel />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
