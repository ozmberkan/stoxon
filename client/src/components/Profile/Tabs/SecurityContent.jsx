import { Shield } from "lucide-react";
import Alert from "~/components/UI/Alert/Alert";

const SecurityContent = () => {
  return (
    <div className="pl-2 flex flex-col gap-2 w-full">
      <h1 className="font-semibold text-xl">Güvenlik Ayarları</h1>
      <Alert
        Icon={Shield}
        head={"Dikkat"}
        content={
          "Güvenlik ayarlarınızı güncellemeden önce lütfen mevcut bilgilerinizi yedekleyin. Değişiklikler geri alınamaz."
        }
      />
      <hr className="my-2 text-neutral-200" />
    </div>
  );
};

export default SecurityContent;
