import { Loader } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto mt-5 flex flex-col gap-3 ">
      <h1 className="text-lg font-bold  text-gray-800">İletişim</h1>

      <p className="text-gray-700 flex items-center gap-1 leading-tight mb-4">
        <Loader className="animate-spin" /> Yakında
      </p>
    </div>
  );
};

export default Contact;
