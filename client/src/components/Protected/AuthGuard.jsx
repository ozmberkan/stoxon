import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "~/store/useAuthStore";

const AuthGuard = () => {
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.authenticator && !user?.is2FAVerified) {
      navigate("/dogrulama");
    } else {
      navigate("/");
    }
  }, [user]);

  return null; // sadece yönlendirme yapar
};

export default AuthGuard;
