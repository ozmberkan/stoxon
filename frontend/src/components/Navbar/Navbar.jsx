import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

const Navbar = () => {
  return (
    <div className="w-full flex flex-col gap-2.5 py-3">
      <div className="py-3 px-4 bg-dark-bg container mx-auto rounded-xl">
        <p className="text-sm text-white">
          The quick brown fox jumps over the lazy dog
        </p>
      </div>
      <div className="container mx-auto py-3 px-4 border border-border-color rounded-xl flex justify-between items-center">
        <Link to="/">
          <img src="/DarkTextWithIcon.svg" className="w-24" />
        </Link>
        <nav>
          <ul className="flex space-x-5 items-center">
            <li className="text-sm font-semibold">
              <Link to="/contact" className="hover:text-neutral-600">
                İletişim
              </Link>
            </li>
            <li className="text-sm font-semibold">
              <Link to="/about" className="hover:text-neutral-600">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link to="/login">
                <Button size="sm" theme="dark">
                  Giriş Yap
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
