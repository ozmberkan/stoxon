import { Search } from "lucide-react";
import React from "react";

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
      <div className=" w-full">
        <h1>Kişisel Bilgilerim</h1>
      </div>
    </div>
  );
};

export default Profile;
