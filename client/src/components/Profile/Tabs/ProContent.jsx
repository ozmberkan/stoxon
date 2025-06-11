import { Stars } from "lucide-react";
import Alert from "~/components/UI/Alert/Alert";
import Button from "~/components/UI/Button";
import Seperator from "~/components/UI/Seperator";
import { logout } from "~/services/authService";
import { assignClaimToUser } from "~/services/claimService";
import { useAuthStore } from "~/store/useAuthStore";

const ProContent = () => {
  const user = useAuthStore((state) => state.user);
  const userClaims = useAuthStore((state) => state.userClaims);

  return (
    <div className="pl-2 flex flex-col gap-2 w-full">
      <h1 className="font-semibold text-xl">Abonelik Yönetimi</h1>
      <Alert
        Icon={Stars}
        head={"Merhaba"}
        headColor={"text-secondary"}
        content={`Pro ${
          userClaims.includes("pro")
            ? "Aktif, Teşekkür ederiz."
            : "Aktif Değil Abonelik satın alarak tüm özelliklerimize erişebilirsiniz."
        }`}
      />
      <Seperator />
      {!userClaims.includes("pro") ? (
        <div>
          <Button
            onClick={() => {
              assignClaimToUser(user.id, "pro").then((res) => {
                window.location.href = "/";
                logout();
              });
            }}
            size={"sm"}
            color={"text-white"}
            bg={"bg-secondary"}
          >
            Pro'yu Dene
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default ProContent;
