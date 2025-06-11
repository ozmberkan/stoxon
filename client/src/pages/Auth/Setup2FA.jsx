import { useEffect, useState } from "react";
import QRCode from "react-qr-code";

import { api } from "~/axios/axios";

const Setup2FA = () => {
  const [otpUrl, setOtpUrl] = useState("");

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
    <div>
      <h2>Google Authenticator’ı Tara</h2>
      {otpUrl && <QRCode value={otpUrl} size={200} />}
    </div>
  );
};

export default Setup2FA;
