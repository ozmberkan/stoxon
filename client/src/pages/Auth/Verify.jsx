import { useState } from "react";
import { api } from "~/axios/axios";
import { logout } from "~/services/authService";

const Verify = () => {
  const [error, setError] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/verify-2fa", { token });
      alert("2FA başarıyla doğrulandı!");
    } catch (err) {
      setError("Kod geçersiz veya süresi dolmuş");
    }
  };

  return (
    <div className="min-h-svh flex flex-col justify-center items-center">
      <h2 className="font-bold text-xl mb-3">2 Adımlı Doğrulama</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          maxLength={6}
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="px-2 py-1 rounded-xl border border-border"
        />
        <button size={"sm"} type="submit">
          Doğrula
        </button>
      </form>
      <button
        onClick={() => {
          logout();
          window.location.reload();
        }}
      >
        Çıkış yap
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Verify;
