import React from "react";
import Shape1 from "../assets/svg/shape1.svg";

const Home = () => {
  return (
    <div className="flex flex-col justify-start items-center p-12 min-h-svh relative">
      <img src={Shape1} className="absolute top-32 left-24" />
      <img src={Shape1} className="absolute top-32 right-24" />
      <div className="flex flex-col items-center justify-center mt-8  leading-32">
        <h1 className="text-[100px] font-black tracking-tighter">
          Stok Takip Mi<span className="animate-pulse">?</span>
        </h1>
        <span className="font-black tracking-tighter text-[90px] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {" "}
          Çok kolay!{" "}
        </span>
      </div>
      <p className="max-w-xl text-center text-neutral-400 mt-4 mb-8">
        Küçük işletmeler için modern, bulut tabanlı stok ve tedarik yönetimi
        platformu. Ürünlerinizi kolayca yönetin, tedarik zincirinizi optimize
        edin ve işinizi büyütün. Hızlı, güvenilir ve kullanıcı dostu arayüzü ile
        stok takibi artık çok daha basit!
      </p>

      <button
        className="px-4 py-1.5 text-sm font-bold rounded-full bg-neutral-100 border border-border
      "
      >
        Hemen Başla
      </button>
    </div>
  );
};

export default Home;
