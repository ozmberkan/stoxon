import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "~/store/useAuthStore";

const AuthGuard = () => {
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.authenticator && !user?.is2FAVerified && user?.QrCode) {
      navigate("/dogrulama");
    } else if (!user?.QrCode && user?.authenticator) {
      navigate("/qr-olustur");
    } else {
      navigate("/profilim");
    }
  }, [user]);

  return null; // sadece yönlendirme yapar
};

export default AuthGuard;
