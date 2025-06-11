import { Lock, Mail, Phone, User2 } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Button from "~/components/UI/Button";
import Seperator from "~/components/UI/Seperator";
import { register } from "~/services/authService";

const Register = () => {
  const defaultFormValues = {
    fullName: "",
    email: "",
    password: "",
    phone: "",
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
    register(values)
      .then((res) => {
        if (res.data.success) {
          setUser(res.data.data);
          toast.success("Kayıt Başarılı");
        }
      })
      .catch((errorResponse) => {
        toast.error(errorResponse.response.data.message || "Kayıt başarısız");
      });
  };

  return (
    <div className="w-full  flex  justify-center mt-24 items-start min-h-svh">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h1 className="font-black text-4xl tracking-tighter">Kayıt Ol</h1>
          <p className="text-neutral-500 max-w-xl text-sm">
            Yeni bir hesap oluşturmak için lütfen aşağıdaki bilgileri doldurun.
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
              to="/giris-yap"
            >
              {" "}
              hesabınıza giriş yapın.
            </Link>
          </p>
        </div>
        <Seperator />
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">
          <div className="flex flex-col relative">
            <label className="text-xs font-semibold flex items-center gap-1 text-neutral-500 absolute -top-2 left-2 bg-background px-1">
              <User2 size={12} /> İsim Soyisim
            </label>
            <input
              name="fullName"
              type="text"
              onChange={handleChange}
              className="py-2 px-3 rounded-lg border border-border focus:outline-none transition-all duration-200 text-sm"
            />
          </div>
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
              <Phone size={12} /> Cep Telefonu
            </label>
            <input
              name="phone"
              type="text"
              onChange={handleChange}
              className="py-2 px-3 rounded-lg border border-border focus:outline-none transition-all duration-200 text-sm"
            />
          </div>
          <div className="flex flex-col relative">
            <label className="text-xs font-semibold flex items-center gap-1 text-neutral-500 absolute -top-2 left-2 bg-background px-1">
              <Lock size={12} /> Parola
            </label>
            <input
              type="password"
              onChange={handleChange}
              name="password"
              className="py-2 px-3 rounded-lg border border-border focus:outline-none transition-all duration-200 text-sm"
            />
          </div>
          <Button
            className="col-span-2"
            size={"sm"}
            type={"submit"}
            bg={"bg-black"}
          >
            Kayıt Ol
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
