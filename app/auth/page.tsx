import { SignUp } from "@/api/signUp";
import AuthComponent from "@/components/auth/AuthComponent";
import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import { lazy } from "react";

export default function Auth() {

 

  return (
    <section className="bg-white flex flex-row w-full h-screen ">
      <div className="w-3/5 box-border p-[30px] justify-center items-center flex  mid:w-full mobile:w-full">
        <AuthComponent />
      </div>

      <div className="w-2/5 bg-white  mid:hidden mobile:hidden overflow-hidden">
        <BlurFade delay={0.25} inView>
          <img
            src={"/auth.jpg"}
            height={0}
            width={0}
            alt="woman"
            className="set-bg-cover"
          />
        </BlurFade>
      </div>
    </section>
  );
}
