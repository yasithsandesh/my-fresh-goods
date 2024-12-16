"use client";
import { Router } from "next/router";
import WrapperContainer from "../wrappers/wrapperContainer";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { checkLogin } from "@/api/verification";
import { ResponseDTO } from "@/models/responseDTO";
import { useEffect, useState } from "react";
import { UserDTO } from "@/models/userDTO";



export default function Header() {

const router = useRouter()
  const [getName, setName] = useState<string>("");



  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      
      const user = ( localStorage.getItem("user") as string)

      

   
        setName(user);
     

  
    } else {
      console.log("normal user")
    }
  }, []);

  const path = usePathname();

  if (path == "/checkout" || path == "/auth" || path == "/auth/verify") {
    return null;
  } else {
    return (
      <nav className="w-full flex-col flex border-b  z-10 border-b-zinc-300  fixed top-0  mobile:hidden ">
        <div className=" w-full flex flex-row  bg-black">
          <WrapperContainer>
            <div className="justify-between box-border p-[5px] bg-black flex flex-row w-full">
              <div className=" flex gap-[10px] cursor-pointer">
                <span className=" text-white">English</span>
                <span className=" text-white">LKR</span>
              </div>
              <div className="flex gap-[10px] cursor-pointer">
                <span className=" text-white">Welcome</span>
                {getName==""?(
                  <Link href={"/auth"} className=" text-white">Login</Link>
                ):(
                  <span className=" text-white">{getName}</span>
                )}
              </div>
            </div>
          </WrapperContainer>
        </div>
        <div className=" w-full flex flex-row  bg-white">
          <WrapperContainer>
            <div className="justify-between box-border p-[10px] bg-white flex flex-row w-full">
              <div className=" flex items-center gap-[30px]">
                <svg
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={()=>{
                    router.push('/')
                  }}
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
                <Link className=" text-black cursor-pointer" href={"/category"}>Categories</Link>
                {/* <Link className=" text-black cursor-pointer" href={"/gardens"} >Gardens</Link> */}
              </div>
              <div className="flex flex-row items-center gap-[30px] cursor-pointer">
                <Link href={"cart"}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_266_259)">
                      <path
                        d="M6.66683 18.3334C7.12707 18.3334 7.50016 17.9603 7.50016 17.5001C7.50016 17.0398 7.12707 16.6667 6.66683 16.6667C6.20659 16.6667 5.8335 17.0398 5.8335 17.5001C5.8335 17.9603 6.20659 18.3334 6.66683 18.3334Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.8333 18.3334C16.2936 18.3334 16.6667 17.9603 16.6667 17.5001C16.6667 17.0398 16.2936 16.6667 15.8333 16.6667C15.3731 16.6667 15 17.0398 15 17.5001C15 17.9603 15.3731 18.3334 15.8333 18.3334Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.7085 1.70825H3.37516L5.59183 12.0583C5.67314 12.4373 5.88405 12.7761 6.18826 13.0165C6.49246 13.2568 6.87092 13.3835 7.2585 13.3749H15.4085C15.7878 13.3743 16.1556 13.2443 16.451 13.0064C16.7465 12.7686 16.9519 12.437 17.0335 12.0666L18.4085 5.87492H4.26683"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_266_259">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>

                <div className="flex w-[20px] h-[20px] rounded-full bg-green-300" onClick={()=>{
                   const user = ( localStorage.getItem("user") as string)
                   if(user){
                    router.push('/profile')
                   }else{
                    router.push('/auth')
                   }
                
                }}></div>
              </div>
            </div>
          </WrapperContainer>
        </div>
      </nav>
    );
  }
}
