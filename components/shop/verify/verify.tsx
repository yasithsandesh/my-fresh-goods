"use client";
import { useState } from "react";
import { UserDTO } from "@/models/userDTO";
import { SignUp } from "@/api/signUp";
import { ResponseDTO } from "@/models/responseDTO";
import BlurFade from "@/components/magicui/blur-fade";
import ShimmerButton from "@/components/magicui/shimmer-button";

import { Verification } from "@/api/verification";
import { toast } from "@/hooks/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { useRouter } from "next/navigation";

export default function VerifyComponent() {
  const [getCode, setCode] = useState("");

  const router = useRouter();

  const showError = (description: string) => {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: description,
      action: <ToastAction altText="Try again">Try again</ToastAction>,
    });
  };

  const verify = async (code: string) => {
    const res: ResponseDTO = await Verification(code);

    if (res.status) {
      router.push("/auth");
    }else if(res == null){
      showError("Server error")
    }else{
      showError(res.message);
    }
  };

  return (
    <section className=" flex flex-col w-full items-center ">
      <div className="w-full flex-col box-border p-[20px] gap-[20px] ">
        <div className=" flex flex-col items-center w-full gap-[10px]">
          <BlurFade delay={0.25 * 2} inView>
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.7075 16.5138C20.0306 20.2587 20.5014 25.1193 21.1965 28.4991L21.8137 31.5003H13.4447L13.8097 28.6821C14.2081 25.6048 14.3348 21.0467 13.5134 17.3395C13.1019 15.4825 12.4967 14.0465 11.7481 13.1102C11.0652 12.256 10.2723 11.81 9.17851 11.7778C8.12421 11.7468 7.44749 12.1249 6.87177 12.8664C6.2054 13.7246 5.66748 15.1145 5.33717 16.9927C4.68042 20.7272 5.00932 25.3996 5.54887 28.5854L0.646601 29.4224C0.0569466 25.9408 -0.353831 20.6401 0.440286 16.1246C0.835407 13.8778 1.57057 11.5734 2.95003 9.79672C4.42015 7.90329 6.56204 6.70585 9.32423 6.78716C12.0469 6.8673 14.1452 8.13264 15.6259 9.98473C16.1138 10.595 16.5323 11.2641 16.8915 11.9706C17.3424 10.9498 17.9282 9.99564 18.6895 9.18038C20.4426 7.30282 22.88 6.42575 25.8234 6.80655L26.2387 6.86027L26.6135 7.04758C28.6178 8.04917 29.9567 9.79433 30.8496 11.6481C31.7431 13.5032 32.2771 15.6409 32.5906 17.7401C33.2174 21.9368 33.0273 26.4316 32.6654 29.3159L27.7318 28.692C28.0537 26.1258 28.2147 22.1079 27.673 18.4805C27.4022 16.6677 26.972 15.0655 26.3729 13.8217C25.8711 12.7799 25.3117 12.1108 24.7363 11.7171C23.5255 11.6559 22.827 12.0491 22.3172 12.5952C21.6247 13.3367 21.0476 14.6324 20.7075 16.5138Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28.8493 6.06938C26.1932 4.55491 21.5232 4.32283 18.6765 7.30695L16.9751 9.09057L15.1725 7.40921C13.9618 6.27997 12.1178 5.47733 10.0715 5.22067C8.02539 4.96405 6.03975 5.28617 4.58305 6.08784L2.1792 1.72071C4.74196 0.310329 7.83206 -0.0841566 10.6919 0.274528C12.8057 0.539643 14.9373 1.23421 16.7656 2.38079C21.5311 -1.07608 27.7492 -0.296353 31.3189 1.7391L28.8493 6.06938Z"
                fill="black"
              />
            </svg>
          </BlurFade>

          <h1 className="text-[#333333] text-[20px]">
            Verify My Fresh Goods Account
          </h1>
        </div>
        <div className=" flex flex-col w-full gap-[10px] items-center   box-border p-[10px] mt-[2rem]">
          {/* //// */}

          <div className=" w-full flex flex-row mobile:flex-col gap-[2px]  justify-between">
            <div className=" w-full  flex-col gap-[5px] px-[10px]  flex box-border">
              <span className=" text-[#9C9C9C]  ">Verification Code</span>
              <div className=" w-full  box-border p-[5px] bg-[#FAFAFA] rounded-[6px] h-[41px] border  flex flex-row justify-center items-center">
                <input
                 
                 
                  placeholder="xxxxxxxx"
                  className=" bg-[#FAFAFA] w-full h-auto p-[5px] rounded-[6px] text-[#9C9C9C]  "
                  onChange={(e) => {
                    setCode(e.target.value);
                    e.preventDefault;
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* button section */}

        <div className=" w-full flex  mobile:gap-[5px] mobile:flex-col-reverse flex-row justify-between pt-[10px] items-center box-border px-[1.5rem]">
          <div className=" flex flex-col gap-[2px]">
            <a className=" text-[15px] text-[#51983C] font-medium cursor-pointer">
              Create Account
            </a>
            <a className=" text-[15px] text-[#51983C] font-medium cursor-pointer">
              Already a Member?
            </a>
          </div>

          <ShimmerButton
            className="shadow-2xl mobile:w-full"
            onClick={() => {
              verify(getCode);
            }}
          >
            <span
              className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg"
         
            >
              Apply
            </span>
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
}
