import React from "react";
import { Link } from "react-router-dom";
import Button from "~/components/UI/Button";

const NotAccess = () => {
  return (
    <div className="w-full min-h-svh flex flex-col justify-center items-center">
      <h1 className="font-semibold text-5xl">401</h1>
      <p className="text-neutral-500">Bu sayfayı görmek için yetkiniz yok.</p>

      <Link to="/" className="mt-3">
        <Button size={"sm"} bg={"bg-secondary"} color={"text-white"}>
          Anasayfaya Dön
        </Button>
      </Link>
    </div>
  );
};

export default NotAccess;
