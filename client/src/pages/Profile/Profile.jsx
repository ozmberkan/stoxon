import { AlertCircle } from "lucide-react";
import Alert from "~/components/UI/Alert/Alert";

const Profile = () => {
  return (
    <div className="min-h-svh flex container mx-auto py-12 ">
      <div className="w-70 flex flex-col gap-1 mr-2 pr-5 border-r border-border">
        <nav className="w-full ">
          <ul className="flex flex-col gap-1.5 w-full ">
            <li className="mb-1 w-full hover:bg-neutral-100 px-2 py-1 rounded-xl">
              <a href="#faq" className="text-text  w-full">
                Kişisel Bilgilerim
              </a>
            </li>
            <li className="mb-1 w-full hover:bg-neutral-100 px-2 py-1 rounded-xl">
              <a href="#faq" className="text-text  w-full">
                Abonelik Yönetimi
              </a>
            </li>
            <li className="mb-1 w-full hover:bg-neutral-100 px-2 py-1 rounded-xl">
              <a href="#faq" className="text-text  w-full">
                Güvenlik Ayarlarım
              </a>
            </li>
            <li className="mb-1 w-full hover:bg-neutral-100 px-2 py-1 rounded-xl">
              <a href="#faq" className="text-text  w-full">
                Bildirim Ayarlarım
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="pl-2 flex flex-col gap-2 w-full">
        <h1 className="font-semibold text-xl">Kişisel Bilgilerim</h1>
        <div>
          Hoş geldin, <span className="font-bold">Berkan Özmen</span>
        </div>
        <Alert
          Icon={AlertCircle}
          head={"Dikkat"}
          content={
            "Kişisel bilgilerinizi güncellemeden önce lütfen mevcut bilgilerinizi yedekleyin. Değişiklikler geri alınamaz."
          }
        />
        <hr className="my-2 text-neutral-200" />
        <form className="grid grid-cols-3 gap-3">
          <div className="flex flex-col ">
            <label className="text-xs font-semibold">İsim Soyisim</label>
            <input
              className="px-2 py-1 rounded-xl border border-border focus:outline-none transition-all duration-200 text-sm"
              value={"Berkan Özmen"}
            />
          </div>
          <div className="flex flex-col ">
            <label className="text-xs font-semibold">E-Posta</label>
            <input
              className="px-2 py-1 rounded-xl border border-border focus:outline-none transition-all duration-200 text-sm"
              value={"ozmberkan@gmail.com"}
            />
          </div>
          <div className="flex flex-col ">
            <label className="text-xs font-semibold">Telefon Numarası</label>
            <input
              className="px-2 py-1 rounded-xl border border-border focus:outline-none transition-all duration-200 text-sm"
              value={"555 123 4567"}
            />
          </div>

          <div className="col-span-3">
            <button className="bg-primary text-sm px-2 py-1 rounded-xl text-white">
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
