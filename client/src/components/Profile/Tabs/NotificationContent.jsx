import { Switch } from "@headlessui/react";
import { Bell } from "lucide-react";
import { useState } from "react";
import Alert from "~/components/UI/Alert/Alert";
import Seperator from "~/components/UI/Seperator";

const NotificationContent = () => {
  const [enabled, setEnabled] = useState(false);

  const handleToggle = () => {
    setEnabled((prev) => !prev);
  };

  return (
    <div className="pl-2 flex flex-col gap-2 w-full">
      <h1 className="font-semibold text-xl">Bildirim Ayarları</h1>
      <Alert
        Icon={Bell}
        head={"Merhaba"}
        content={
          "Bildirimlerden rahatsız mı oldunuz ? Bu sekmeden bildirimleri kapatabilirsiniz."
        }
      />
      <Seperator />

      <div className="flex items-center gap-1">
        <Switch
          checked={enabled}
          onChange={handleToggle}
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
