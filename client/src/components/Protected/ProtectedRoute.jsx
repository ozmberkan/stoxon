// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";

const ProtectedRoute = ({ requiredClaim }) => {
  const userClaims = useAuthStore((state) => state.userClaims);
  const isLoading = useAuthStore((state) => state.isLoading);

  if (isLoading) return <div>Yükleniyor...</div>;
  if (userClaims.includes(requiredClaim)) {
    return <Outlet />;
  } else {
    return <Navigate to="/401" replace />;
  }
};

export default ProtectedRoute;
