import React from "react";
import Button from "~/components/UI/Button";

const Home = () => {
  return (
    <div className="container mx-auto h-screen flex flex-col gap-5 items-center justify-start ">
      <h1 className="mt-12 leading-tight font-black text-[70px] text-center">
        Birlikte çalışarak <br /> Daha iyi işler yapabiliriz!
      </h1>
      <span className="text-neutral-500 text-sm">
        The quick brown fox jumps over the lazy dog
      </span>
      <div className="mt-3 flex items-center gap-2 flex-col">
        <Button theme="Dark">Ücretsiz Dene</Button>
        <p className="text-[11px] text-neutral-400">Ücret talep edilmez.</p>
      </div>
      <img src="DarkIcon.svg" className="w-74 mt-5 drop-shadow-2xl" />
    </div>
  );
};

export default Home;
