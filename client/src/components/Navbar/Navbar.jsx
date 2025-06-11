import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import {
  Archive,
  Bell,
  HelpCircle,
  Lock,
  LogOut,
  Menu as MenuIcon,
  NotebookText,
  Stars,
  SwatchBook,
  User2,
  Users,
} from "lucide-react";
import moment from "moment";
import { Link } from "react-router-dom";
import Logo from "../UI/Logo/Logo";
import Seperator from "../UI/Seperator";
import { useAuthStore } from "~/store/useAuthStore";
import { logout } from "~/services/authService";
import { toast } from "sonner";

const Navbar = () => {
  const userClaims = useAuthStore((state) => state.userClaims);
  const clearUser = useAuthStore((state) => state.clearUser);

  return (
    <div className="flex flex-col w-full ">
      <div className="w-full py-2 ">
        <div className="container mx-auto flex items-center justify-between h-full">
          <div className="w-full flex justify-between items-center">
            <p className="font-medium text-neutral-400 text-xs">
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
            <div className="flex items-center gap-3">
              <Link
                to="/hakkimizda"
                className="font-semibold text-sm hover:text-neutral-600"
              >
                Hakkımızda
              </Link>
              <Link
                to="/iletisim"
                className="font-semibold text-sm hover:text-neutral-600"
              >
                İletişim
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Popover className="relative">
                <PopoverButton className="hover:bg-neutral-200/75 p-2 rounded-full transition-all duration-300 outline-none">
                  <Bell size={20} />
                </PopoverButton>
                <PopoverPanel
                  anchor="bottom end"
                  transition
                  className="[--anchor-gap:4px] flex flex-col outline-none border border-border transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0 bg-white shadow rounded-2xl p-2.5  w-64"
                >
                  <h1 className="flex items-center gap-1 font-semibold text-sm">
                    <Bell size={14} />
                    Bildirimler
                  </h1>
                  <hr className="my-2 text-neutral-100" />
                  <div className="flex flex-col gap-1.5">
                    <div className="flex flex-col text-xs border-l-2 border-l-primary pl-2">
                      <p className=" ">Yeni bir versiyon yayınlandı! </p>
                      <span className="text-neutral-400">
                        {moment().format("DD.MM.YYYY HH:mm")}
                      </span>
                    </div>
                    <div className="flex flex-col text-xs border-l-2 border-l-secondary pl-2">
                      <p className="line-clamp-2">
                        Düzenli olarak sürüm yükseltmesi yapılmaktadır.{" "}
                      </p>
                      <span className="text-neutral-400">
                        {moment().add(-1, "days").format("DD.MM.YYYY HH:mm")}
                      </span>
                    </div>
                  </div>
                </PopoverPanel>
              </Popover>

              <Menu>
                <MenuButton className="hover:bg-neutral-200/75 p-2 rounded-full transition-all duration-300 outline-none">
                  <MenuIcon size={20} />
                </MenuButton>
                <MenuItems
                  modal={false}
                  anchor="bottom end"
                  transition
                  className="[--anchor-gap:4px] outline-none border border-border transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0 bg-white shadow rounded-2xl p-2 w-54"
                >
                  {userClaims.includes("user") ? (
                    <MenuItem>
                      <Link
                        className="flex items-center gap-1.5 font-semibold text-neutral-500 transition-all duration-200 hover:text-text data-focus:bg-neutral-100 text-sm p-2 rounded-lg"
                        to="/profilim"
                      >
                        <User2 size={17} />
                        Profilim
                      </Link>
                    </MenuItem>
                  ) : (
                    <>
                      {authLinks.map((link) => (
                        <MenuItem key={link.id}>
                          <Link
                            className="flex items-center gap-1.5 font-semibold text-neutral-500 transition-all duration-200 hover:text-text data-focus:bg-neutral-100 text-sm p-2 rounded-lg"
                            to={link.path}
                          >
                            <link.icon size={17} />
                            {link.name}
                          </Link>
                        </MenuItem>
                      ))}
                      <Seperator />
                    </>
                  )}
                  {userClaims.includes("dashboard") &&
                  userClaims.includes("user") ? (
                    <>
                      <Seperator />
                      <MenuItem>
                        <Link
                          className="flex items-center gap-1.5 font-semibold text-neutral-500 transition-all duration-200 hover:text-text data-focus:bg-neutral-100 text-sm p-2 rounded-lg"
                          to="/yonetim"
                        >
                          <Lock size={17} />
                          Admin Panel
                        </Link>
                      </MenuItem>
                    </>
                  ) : null}

                  {userClaims.includes("panel") &&
                  userClaims.includes("user") ? (
                    <>
                      <Seperator />
                      <MenuItem>
                        <Link
                          className="flex items-center gap-1.5 font-semibold text-neutral-500 transition-all duration-200 hover:text-text data-focus:bg-neutral-100 text-sm p-2 rounded-lg"
                          to="/panel"
                        >
                          <Archive size={17} />
                          Panel
                        </Link>
                      </MenuItem>
                      <Seperator />
                    </>
                  ) : null}

                  {userClaims.includes("pro") &&
                  userClaims.includes("user") &&
                  userClaims.includes("panel") ? (
                    <>
                      {navLinks.map((link) => (
                        <MenuItem>
                          <Link
                            className="flex items-center justify-between gap-1.5 font-semibold text-neutral-500 transition-all duration-200 hover:text-text data-focus:bg-neutral-100 text-sm p-2 rounded-lg"
                            to={link.path}
                          >
                            <div className="flex items-center gap-1.5">
                              <link.icon size={17} />
                              {link.name}
                            </div>
                            {link.badge && (
                              <div>
                                <span className="bg-primary/10 font-bold px-2 py-0.5 rounded-full border text-primary border-primary/25 flex justify-center items-center text-[10px]">
                                  {link.badgeText}
                                </span>
                              </div>
                            )}
                          </Link>
                        </MenuItem>
                      ))}
                      <Seperator />{" "}
                    </>
                  ) : null}
                  <MenuItem>
                    <Link className="flex items-center justify-between gap-1.5 font-semibold text-neutral-500 transition-all duration-200  hover:cursor-not-allowed text-sm p-2 rounded-lg">
                      <div className="flex items-center gap-1.5">
                        {" "}
                        <Stars size={17} />
                        Pro Plan
                      </div>
                      <div>
                        <span className="bg-neutral-500/10 font-bold px-2 py-0.5 rounded-full border text-neutral-500 border-neutral-500/25 flex justify-center items-center text-[10px]">
                          YAKINDA
                        </span>
                      </div>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      className="flex items-center gap-1.5 font-semibold text-neutral-500 transition-all duration-200 hover:text-text data-focus:bg-neutral-100 text-sm p-2 rounded-lg"
                      to="/yardim-destek"
                    >
                      <HelpCircle size={17} />
                      Yardım ve Destek
                    </Link>
                  </MenuItem>

                  {userClaims.includes("user") ? (
                    <>
                      <Seperator />
                      <MenuItem>
                        <button
                          onClick={() => {
                            logout().then((res) => {
                              if (res.data.success) {
                                toast.success("Çıkış başarılı");
                                clearUser();
                                window.location.reload();
                              }
                            });
                          }}
                          className="flex w-full items-center gap-1.5 font-semibold text-neutral-500 transition-all duration-200 hover:text-red-500 data-focus:bg-red-100 text-sm p-2 rounded-lg"
                          to="/profile"
                        >
                          <LogOut size={17} />
                          Çıkış Yap
                        </button>
                      </MenuItem>{" "}
                    </>
                  ) : null}
                </MenuItems>
              </Menu>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

export const navLinks = [
  {
    id: 2,
    name: "Raporlar",
    path: "/raporlar",
    icon: NotebookText,
    badge: true,
    badgeText: "PRO",
  },
  {
    id: 3,
    name: "Kategoriler",
    path: "/kategoriler",
    icon: SwatchBook,
    badge: true,
    badgeText: "PRO",
  },
  {
    id: 4,
    name: "Kullanıcılar",
    path: "/kullanicilar",
    icon: Users,
    badge: true,
    badgeText: "PRO",
  },
];

export const authLinks = [
  { id: 1, name: "Giriş Yap", path: "/giris-yap", icon: Lock, badge: false },
  { id: 2, name: "Kayıt Ol", path: "/kayit-ol", icon: User2, badge: false },
];
