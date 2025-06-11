import { Lock, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Button from "~/components/UI/Button";
import Seperator from "~/components/UI/Seperator";
import { login } from "~/services/authService";
import { useAuthStore } from "~/store/useAuthStore";

const Login = () => {
  const setUser = useAuthStore((state) => state.setUser);

  const defaultFormValues = {
    email: "",
    password: "",
  };

  const [values, setValues] = useState({ ...defaultFormValues });

  const handleChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(values)
      .then((res) => {
        if (res.data.success) {
          const user = res.data.data;
          setUser(user);
          toast.success("Giriş Başarılı");
          window.location.href = "/";
        }
      })
      .catch((errorResponse) => {
        toast.error(errorResponse.response.data.message || "Giriş başarısız");
      });
  };

  return (
    <div className="w-full  flex  justify-center mt-24 items-start  min-h-svh">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h1 className="font-black text-4xl tracking-tighter">Giriş Yap</h1>
          <p className="text-neutral-500 max-w-xl text-sm">
            Hesabınıza erişmek için lütfen aşağıdaki bilgileri doldurun.
            <br />
            Hesabınızla ilgili herhangi bir sorun yaşarsanız, lütfen{" "}
            <Link
              className="text-black font-semibold hover:underline"
              to="/yardim-destek"
            >
              destek ekibimizle
            </Link>{" "}
            iletişime geçin. <br />
            <Link className="text-black font-semibold hover:underline" to="/">
              Anasayfaya dönün{" "}
            </Link>
            ya da
            <Link
              className="text-black font-semibold hover:underline"
              to="/kayit-ol"
            >
              {" "}
              hesap oluşturun.
            </Link>
          </p>
        </div>
        <Seperator />
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
          <div className="flex flex-col relative">
            <label className="text-xs font-semibold flex items-center gap-1 text-neutral-500 absolute -top-2 left-2 bg-background px-1">
              <Mail size={12} /> E-Posta
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="py-2 px-3 rounded-lg border border-border focus:outline-none transition-all duration-200 text-sm"
            />
          </div>

          <div className="flex flex-col relative">
            <label className="text-xs font-semibold flex items-center gap-1 text-neutral-500 absolute -top-2 left-2 bg-background px-1">
              <Lock size={12} /> Parola
            </label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              className="py-2 px-3 rounded-lg border border-border focus:outline-none transition-all duration-200 text-sm"
            />
          </div>
          <Button
            className="col-span-1"
            size={"sm"}
            type={"submit"}
            bg={"bg-black"}
          >
            Giriş Yap
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
