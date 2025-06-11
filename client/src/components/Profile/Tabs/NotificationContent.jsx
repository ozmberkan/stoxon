import { Switch } from "@headlessui/react";
import { Bell } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Alert from "~/components/UI/Alert/Alert";
import Seperator from "~/components/UI/Seperator";
import { update } from "~/services/userService";
import { useAuthStore } from "~/store/useAuthStore";

const NotificationContent = () => {
  const user = useAuthStore((state) => state.user);

  const [isOpen, setIsOpen] = useState(user?.notification);

  const toggleHandle = () => {
    setIsOpen(!isOpen);
    update(user.id, { notification: !isOpen })
      .then((res) => {
        toast.success("Bildirim ayarlarınız güncellendi.");
      })
      .catch((err) => {
        toast.error("Bildirim ayarlarınız güncellenemedi.");
      });
  };

  return (
    <div className="pl-2 flex flex-col gap-2 w-full">
      <h1 className="font-semibold text-xl">Bildirim Ayarları</h1>
      <Alert
        Icon={Bell}
        head={"Merhaba"}
        content={
          "Bildirimlerden rahatsız mı oldunuz ? Bu sekmeden bildirimleri yönetebilirsiniz."
        }
      />
      <Seperator />

      <div className="flex items-center gap-1">
        <Switch
          checked={isOpen}
          onChange={toggleHandle}
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-primary"
        >
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />
        </Switch>
        <span className="text-sm text-neutral-500">
          Bildirimleri Kapat / Aç
        </span>
      </div>
    </div>
  );
};

export default NotificationContent;
