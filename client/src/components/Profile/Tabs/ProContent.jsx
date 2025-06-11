import { Stars } from "lucide-react";
import Alert from "~/components/UI/Alert/Alert";
import Button from "~/components/UI/Button";
import Seperator from "~/components/UI/Seperator";

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
      <Seperator />
      <div>
        <Button size={"sm"} color={"text-white"} bg={"bg-secondary"}>
          Pro'yu Dene
        </Button>
      </div>
    </div>
  );
};

export default ProContent;
