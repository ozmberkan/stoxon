import React from "react";
import Button from "~/components/UI/Button";
import Input from "~/components/UI/Input";

const Login = () => {
  return (
    <div className="container mx-auto flex  items-center justify-center max-w-lg gap-2 ">
      <div className=" p-3 flex-col flex rounded-lg h-full ">
        <h1 className="font-bold text-xl">Giriş Yap</h1>
        <p className="text-xs text-neutral-400 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          perferendis magni assumenda beatae neque sint vitae, quo
        </p>
        <form className="mt-3 flex flex-col gap-3">
          <Input
            type={"email"}
            placeholder={"ör: example@mail.com"}
            name={"email"}
            label={"E-Posta"}
          />
          <Input
            type={"password"}
            placeholder={"ör: **********"}
            name={"password"}
            label={"Parola"}
          />
          <Button theme="dark" className={"flex items-center justify-center"}>
            Giriş Yap
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
