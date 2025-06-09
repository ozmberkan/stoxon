import moment from "moment";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-center font-medium items-center h-16 bg-neutral-100 text-text">
        <p className="text-sm">
          © {moment().format("YYYY")}. <span className="font-bold">Stoxon</span>{" "}
          Tüm hakları saklıdır.{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
