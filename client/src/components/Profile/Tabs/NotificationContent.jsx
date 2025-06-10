import { Bell } from "lucide-react";
import Alert from "~/components/UI/Alert/Alert";

const NotificationContent = () => {
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
      <hr className="my-2 text-neutral-200" />
    </div>
  );
};

export default NotificationContent;
