import Button from "~/components/UI/Button";
import Shape1 from "../assets/svg/shape1.svg";
import { Link } from "react-router-dom";
import { useAuthStore } from "~/store/useAuthStore";

const Home = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="flex flex-col justify-start items-center py-12 my-12 min-h-svh container mx-auto">
      <img src={Shape1} className="absolute top-48 rotate-32 left-24" />
      <img src={Shape1} className="absolute top-48 rotate-32 right-24" />
      <div className="flex flex-col items-center justify-center mt-8  leading-24">
        <h1 className="text-[100px] font-black tracking-tighter">
          {!user ? "Stok Takip Mi?" : "Hoş Geldin!"}
        </h1>
        <span className="font-black  text-[90px] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {" "}
          {user ? `${user.fullName}` : "Çok kolay!"}
        </span>
      </div>
      <p className="max-w-xl text-center text-neutral-400 mt-4 mb-8">
        Küçük işletmeler için modern, bulut tabanlı stok ve tedarik yönetimi
        platformu. Ürünlerinizi kolayca yönetin, tedarik zincirinizi optimize
        edin ve işinizi büyütün. Hızlı, güvenilir ve kullanıcı dostu arayüzü ile
        stok takibi artık çok daha basit!
      </p>

      <Link to={user ? "/profilim" : "/giris-yap"}>
        <Button
          bg={"bg-neutral-100"}
          border
          borderColor={"border-border"}
          color="text-black"
          size={"sm"}
        >
          Hemen Başla
        </Button>
      </Link>
    </div>
  );
};

export default Home;
