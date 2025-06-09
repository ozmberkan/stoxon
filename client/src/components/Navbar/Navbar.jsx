import React from "react";
import Logo from "../UI/Logo/Logo";
import {
  Archive,
  HelpCircle,
  LogOut,
  Menu as MenuIcon,
  NotebookText,
  Settings,
  Stars,
  Store,
  SwatchBook,
  User,
  User2,
  Users,
} from "lucide-react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col w-full ">
      <div className="w-full py-2 ">
        <div className="container mx-auto flex items-center justify-between h-full">
          <div className="w-full flex justify-between items-center">
            <p className="font-semibold text-sm">
              Küçük işletmeler için modern, bulut tabanlı stok ve tedarik
              yönetimi platformu
            </p>
            <span className="bg-secondary/10 font-bold px-1 py-0.5 rounded-full border text-secondary border-secondary/25 flex justify-center items-center text-xs gap-1">
              YAKINDA
              <Stars size={14} />
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-15 bg-neutral-100 border-t border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-full">
          <div className="flex justify-between w-full  h-full items-center">
            <Logo />
          </div>
          <Menu>
            <MenuButton className="hover:bg-neutral-200/75 p-2 rounded-full transition-all duration-300 outline-none">
              <MenuIcon size={20} />
            </MenuButton>
            <MenuItems
              anchor="bottom end"
              transition
              className="origin-top outline-none border border-border transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0 bg-white shadow rounded-2xl p-2 w-54"
            >
              <MenuItem>
                <Link
                  className="flex items-center gap-1.5 font-semibold text-neutral-500 transition-all duration-200 hover:text-text data-focus:bg-neutral-100 text-sm p-2 rounded-lg"
                  to="/profile"
                >
                  <User2 size={17} />
                  Profilim
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  className="flex items-center gap-1.5 font-semibold text-neutral-500 transition-all duration-200 hover:text-text data-focus:bg-neutral-100 text-sm p-2 rounded-lg"
                  to="/profile"
                >
                  <Settings size={17} />
                  Ayarlar
                </Link>
              </MenuItem>
              <hr className="my-2 text-neutral-100" />
              <MenuItem>
                <Link
                  className="flex items-center gap-1.5 font-semibold text-neutral-500 transition-all duration-200 hover:text-text data-focus:bg-neutral-100 text-sm p-2 rounded-lg"
                  to="/profile"
                >
                  <Archive size={17} />
                  Panel
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className="flex items-center justify-between gap-1.5 font-medium text-neutral-300 transition-all duration-200  hover:cursor-not-allowed text-sm p-2 rounded-lg">
                  <div className="flex items-center gap-1.5">
                    {" "}
                    <NotebookText size={17} />
                    Raporlar
                  </div>
                  <span>
                    <span className="bg-violet-500/10 text-nowrap font-bold px-2 py-0.5 rounded-full border text-violet-500 border-violet-500/25 flex justify-center items-center text-[10px]">
                      PRO
                    </span>
                  </span>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className="flex items-center justify-between gap-1.5 font-medium text-neutral-300 transition-all duration-200  hover:cursor-not-allowed text-sm p-2 rounded-lg">
                  <div className="flex items-center gap-1.5">
                    {" "}
                    <SwatchBook size={17} />
                    Kategoriler
                  </div>
                  <span>
                    <span className="bg-violet-500/10 text-nowrap font-bold px-2 py-0.5 rounded-full border text-violet-500 border-violet-500/25 flex justify-center items-center text-[10px]">
                      PRO
                    </span>
                  </span>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className="flex items-center justify-between gap-1.5 font-medium text-neutral-300 transition-all duration-200  hover:cursor-not-allowed text-sm p-2 rounded-lg">
                  <div className="flex items-center gap-1.5">
                    {" "}
                    <Users size={17} />
                    Kullanıcılar
                  </div>
                  <span>
                    <span className="bg-violet-500/10 text-nowrap font-bold px-2 py-0.5 rounded-full border text-violet-500 border-violet-500/25 flex justify-center items-center text-[10px]">
                      PRO
                    </span>
                  </span>
                </Link>
              </MenuItem>
              <hr className="my-2 text-neutral-100" />
              <MenuItem>
                <Link className="flex items-center justify-between gap-1.5 font-semibold text-neutral-500 transition-all duration-200  hover:cursor-not-allowed text-sm p-2 rounded-lg">
                  <div className="flex items-center gap-1.5">
                    {" "}
                    <Stars size={17} />
                    Pro Plan
                  </div>
                  <span>
                    <span className="bg-neutral-500/10 font-bold px-2 py-0.5 rounded-full border text-neutral-500 border-neutral-500/25 flex justify-center items-center text-[10px]">
                      YAKINDA
                    </span>
                  </span>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  className="flex items-center gap-1.5 font-semibold text-neutral-500 transition-all duration-200 hover:text-text data-focus:bg-neutral-100 text-sm p-2 rounded-lg"
                  to="/profile"
                >
                  <HelpCircle size={17} />
                  Yardım ve Destek
                </Link>
              </MenuItem>

              <hr className="my-2 text-neutral-100" />
              <MenuItem>
                <Link
                  className="flex items-center gap-1.5 font-semibold text-neutral-500 transition-all duration-200 hover:text-red-500 data-focus:bg-red-100 text-sm p-2 rounded-lg"
                  to="/profile"
                >
                  <LogOut size={17} />
                  Çıkış Yap
                </Link>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
