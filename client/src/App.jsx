import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import Layout from "./layouts/Layout";
import About from "./pages/About/About";
import Dashboard from "./pages/Admin/Dashboard";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Contact from "./pages/Contact/Contact";
import Help from "./pages/Help/Help";
import Home from "./pages/Home";
import NotAccess from "./pages/NotAccess/NotAccess";
import Panel from "./pages/Panel/Panel";
import Categories from "./pages/Pro/Categories/Categories";
import Reports from "./pages/Pro/Reports/Reports";
import Users from "./pages/Pro/Users/Users";
import Profile from "./pages/Profile/Profile";
import { useAuthStore } from "./store/useAuthStore";
import { Toaster } from "sonner";
import { useEffect } from "react";
import { getMyInfo } from "./services/userService";

const App = () => {
  const userClaims = useAuthStore((state) => state.userClaims);
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    if (!user) {
      getMyInfo()
        .then((response) => {
          if (response.data.success) {
            setUser(response.data.user);
          }
        })
        .catch((error) => {
          console.error("Error fetching user info:", error);
        });
    }
  }, [user]);

  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        {/* Footer & Navbar */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/yardim-destek" element={<Help />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/iletisim" element={<Contact />} />
        </Route>

        {/* Auth */}
        <Route path="/kayit-ol" element={<Register />} />
        <Route path="/giris-yap" element={<Login />} />

        {/* Profile */}
        {userClaims.includes("user") ? (
          <Route element={<Layout />}>
            <Route path="/profilim" element={<Profile />} />
          </Route>
        ) : (
          <Route path="/profilim" element={<Navigate to="/401" replace />} />
        )}

        {/* Pro Kullanıcılar */}
        {userClaims.includes("pro") ? (
          <Route element={<AdminLayout />}>
            <Route path="/kullanicilar" element={<Users />} />
            <Route path="/kategoriler" element={<Categories />} />
            <Route path="/raporlar" element={<Reports />} />
          </Route>
        ) : (
          <>
            <Route
              path="/kullanicilar"
              element={<Navigate to="/401" replace />}
            />
            <Route
              path="/kategoriler"
              element={<Navigate to="/401" replace />}
            />
            <Route path="/raporlar" element={<Navigate to="/401" replace />} />
          </>
        )}

        {/* Panel */}
        {userClaims.includes("panel") ? (
          <Route element={<AdminLayout />}>
            <Route path="/panel" element={<Panel />} />
          </Route>
        ) : (
          <Route path="/panel" element={<Navigate to="/401" replace />} />
        )}

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

        {/* Redirect to Home if no route matches */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
