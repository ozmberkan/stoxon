import { Stars } from "lucide-react";
import Alert from "~/components/UI/Alert/Alert";

const ProContent = () => {
  return (
    <div className="pl-2 flex flex-col gap-2 w-full">
      <h1 className="font-semibold text-xl">Abonelik Yönetimi</h1>
      <Alert
        Icon={Stars}
        head={"Merhaba"}
        headColor={"text-secondary"}
        content={
          "Pro aboneliğiniz aktif değil, Abonelik satın alarak tüm özelliklerimize erişebilirsiniz."
        }
      />
      <hr className="my-2 text-neutral-200" />
    </div>
  );
};

export default ProContent;
