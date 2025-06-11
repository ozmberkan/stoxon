import { useEffect, useState } from "react";
import QRCode from "react-qr-code";

import { api } from "~/axios/axios";
import { update } from "~/services/userService";
import { useAuthStore } from "~/store/useAuthStore";

const Setup2FA = () => {
  const [otpUrl, setOtpUrl] = useState("");
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    const fetchOtp = async () => {
      try {
        const res = await api.post("/auth/setup-2fa");
        setOtpUrl(res.data.otpauth_url);
      } catch (err) {
        console.error("2FA setup hatası:", err.response?.data || err);
      }
    };

    fetchOtp();
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full justify-center items-center gap-5">
      <h1>Google Authenticator Kurulumu</h1>
      <p>
        Google Authenticator uygulamasını kullanarak hesabınız için 2 adımlı
        doğrulamayı etkinleştirin. Aşağıdaki QR kodunu tarayın veya sağlanan
        URL'yi kullanın.
      </p>
      {otpUrl && (
        <div className="p-12 rounded-xl border border-border">
          <QRCode value={otpUrl} size={200} />
        </div>
      )}
      <button
        onClick={() => {
          update(user.id, { QrCode: true }).then((res) => {
            window.location.href = "/verify";
          });
        }}
        className="px-2 py-1 rounded-xl bg-primary text-white"
      >
        Koda sahibim, devam et
      </button>
    </div>
  );
};

export default Setup2FA;
