import { Switch } from "@headlessui/react";
import { Shield } from "lucide-react";
import { useEffect, useState } from "react";
import Alert from "~/components/UI/Alert/Alert";
import Seperator from "~/components/UI/Seperator";
import { update } from "~/services/userService";
import { useAuthStore } from "~/store/useAuthStore";

const SecurityContent = () => {
  const [enabled, setEnabled] = useState(false);
  const user = useAuthStore((state) => state.user);

  const handleToggle = async () => {
    const newValue = !enabled;
    setEnabled(newValue);
    await update(user.id, { authenticator: newValue });
  };

  return (
    <div className="pl-2 flex flex-col gap-2 w-full">
      <h1 className="font-semibold text-xl">Güvenlik Ayarları</h1>
      <Alert
        Icon={Shield}
        head={"Dikkat"}
        content={
          "Güvenlik ayarlarınızdan google authenticator'ı açarak hesabınızı daha güvenli hale getirebilirsiniz. Bu özellik, hesabınıza giriş yaparken ek bir doğrulama katmanı ekler."
        }
      />
      <Seperator />
      <div className="flex items-center gap-1">
        <Switch
          checked={enabled || user.authenticator}
          onChange={handleToggle}
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-primary"
        >
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />
        </Switch>
        <span className="text-sm text-neutral-500">
          Google Authenticator Kapat / Aç
        </span>
      </div>
    </div>
  );
};

export default SecurityContent;
