import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import Layout from "./layouts/Layout";
import Dashboard from "./pages/Admin/Dashboard";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Help from "./pages/Help/Help";
import Home from "./pages/Home";
import NotAccess from "./pages/NotAccess/NotAccess";
import Profile from "./pages/Profile/Profile";

const App = () => {
  const userClaims = ["customer"];

  return (
    <BrowserRouter>
      <Routes>
        {/* Footer & Navbar */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/yardim-destek" element={<Help />} />
          <Route path="/profilim" element={<Profile />} />
        </Route>
        {/* Auth */}
        <Route path="/kayit-ol" element={<Register />} />
        <Route path="/giris-yap" element={<Login />} />
        {/* Admin Panel */}
        {userClaims.includes("dashboard") ? (
          <Route element={<AdminLayout />}>
            <Route path="/yonetim" element={<Dashboard />} />
          </Route>
        ) : (
          <Route path="/yonetim" element={<Navigate to="/401" replace />} />
        )}
        {/* 401 */}
        <Route path="/401" element={<NotAccess />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
