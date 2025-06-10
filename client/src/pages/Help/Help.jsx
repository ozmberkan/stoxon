import { Search } from "lucide-react";
import React from "react";

const Help = () => {
  return (
    <div className="min-h-svh flex container mx-auto py-6 ">
      <div className="w-70 flex flex-col gap-1 mr-2 pr-5 border-r border-border">
        <form className="flex flex-row  items-center gap-1">
          <input
            placeholder="Ara.."
            className="px-2 py-1 rounded-xl border border-border w-full focus:outline-none transition-all duration-200"
          />
          <button className="bg-neutral-200 rounded-xl py-1 px-2">
            <Search size={20} />
          </button>
        </form>
        <nav className="mt-5 w-full ">
          <ul className="flex flex-col gap-1.5 w-full ">
            <li className="mb-1 w-full hover:bg-neutral-100 p-2 rounded-lg">
              <a href="#faq" className="text-text  w-full">
                Sıkça Sorulan Sorular
              </a>
            </li>
            <li className="mb-1 w-full hover:bg-neutral-100 p-2 rounded-lg">
              <a href="#faq" className="text-text  w-full">
                İletişim
              </a>
            </li>
            <li className="mb-1 w-full hover:bg-neutral-100 p-2 rounded-lg">
              <a href="#faq" className="text-text  w-full">
                Kullanım Kılavuzları
              </a>
            </li>
            <li className="mb-1 w-full hover:bg-neutral-100 p-2 rounded-lg">
              <a href="#faq" className="text-text  w-full">
                Geri Bildirim
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className=" w-full">
        <h1>Sıkça Sorulan Sorular</h1>
      </div>
    </div>
  );
};

export default Help;
