"use client";
import ShimmerButton from "@/components/magicui/shimmer-button";
import WrapperContainer from "@/components/wrappers/wrapperContainer";
import { ResponseDTO } from "@/models/responseDTO";
import { useState } from "react"
import { useRouter } from "next/navigation";

const logOut = async ()=>{
  try {
    const res = await fetch(`http://localhost:8080/my-fresh-goods-api/LogOut`, {
        method: 'GET',
        credentials: 'include'
    })

    if (res.ok) {
        const response = await res.json();
        return response
    }

} catch (error) {

}
}

export default function Profile() {
  const [view, setView] = useState(true);

  const router =  useRouter()

  return (
    <div className=" w-full flex flex-col  bg-white min-h-screen mobile:mt-0 mt-[80px]">
      <WrapperContainer>
        <div className=" w-full flex flex-col gap-[10px]">
          {/* 01 start*/}
          <div className="w-full flex flex-row pt-[16px] pb-[16px] box-border gap-[5px]">
            <span className=" text-black cursor-pointer opacity-65">Home</span>
            <span className=" text-black cursor-pointer opacity-65">{">"}</span>
            <span className=" text-black cursor-pointer">Profile</span>
          </div>

          <div className=" w-full flex flex-row gap-[5px]">
            <div className=" w-[50px] h-[50px] rounded-full bg-emerald-300">
              {/* image */}
            </div>
            <div className=" flex flex-col">
              <span className=" text-black cursor-pointer">Yasith Sandesh</span>
              <span className=" text-black cursor-pointer opacity-65">
                Update your profile
              </span>
            </div>
          </div>

          <div className=" flex flex-row w-full justify-center">
            <div className=" w-[60%] mobile:w-[100%] flex flex-row box-border p-[20px] mobile:flex-col">
              <div className=" flex flex-col items-start gap-[10px] w-1/5 mobile:flex-row mobile:w-full mobile:justify-center mobile:mb-[10px]">
                <span
                  className=" text-black cursor-pointer"
                  onClick={() => {
                    setView(true);
                  }}
                >
                  General
                </span>
                <span
                  className=" text-black cursor-pointer"
                  onClick={() => {
                    setView(false);
                  }}
                >
                  Orders
                </span>
                <span className="  text-rose-500 cursor-pointer" onClick={()=>{
                  logOut().then((res:ResponseDTO)=>{
                    if(res.status){
                      localStorage.removeItem("user")
                      router.push("/")
                    }
                  })
                }}>LOGOUT</span>
              </div>
              {view ? (
                <>
                  <div className=" flex flex-col flex-1 w-4/5  mobile:w-full gap-[15px]">
                    <div className=" w-full  flex-col gap-[5px] px-[10px]  flex box-border">
                      <span className=" text-[#9C9C9C]  ">First Name</span>
                      <div className=" w-full  box-border p-[5px] bg-[#FAFAFA] rounded-[6px] h-[41px] border  flex flex-row justify-center items-center">
                        <input
                          type="text"
                          placeholder="Yasith"
                          className=" bg-[#FAFAFA] w-full h-auto p-[5px] rounded-[6px] text-[#9C9C9C]  "
                        />
                      </div>
                    </div>

                    <div className=" w-full  flex-col gap-[5px] px-[10px]  flex box-border">
                      <span className=" text-[#9C9C9C]  ">Last Name</span>
                      <div className=" w-full  box-border p-[5px] bg-[#FAFAFA] rounded-[6px] h-[41px] border  flex flex-row justify-center items-center">
                        <input
                          type="text"
                          placeholder="Sandesh"
                          className=" bg-[#FAFAFA] w-full h-auto p-[5px] rounded-[6px] text-[#9C9C9C]  "
                        />
                      </div>
                    </div>

                    <div className=" w-full  flex-col gap-[5px] px-[10px]  flex box-border">
                      <span className=" text-[#9C9C9C]  ">Email</span>
                      <div className=" w-full  box-border p-[5px] bg-[#FAFAFA] rounded-[6px] h-[41px] border  flex flex-row justify-center items-center">
                        <input
                          type="text"
                          placeholder="exmple@gmail.com"
                          className=" bg-[#FAFAFA] w-full h-auto p-[5px] rounded-[6px] text-[#9C9C9C]  "
                        />
                      </div>
                    </div>

                    <div className=" flex  flex-row w-full justify-end">
                      <ShimmerButton className="shadow-2xl mobile:w-full">
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                          Save
                        </span>
                      </ShimmerButton>
                    </div>
                  </div>
                </>
              ) : (
                <div className=" w-full flex flex-col">
                  <div className=" w-full flex flex-row justify-between border-b-[2px]  box-border p-[10px]">
                    <span className=" text-black cursor-pointer opacity-65">
                      Order ID
                    </span>
                    <span className=" text-black cursor-pointer opacity-65">
                      Date
                    </span>
                    <span className=" text-black cursor-pointer opacity-65">
                      Price(LKR)
                    </span>
                  </div>

                  {/* ////Orders///List */}

                  <div className=" w-full flex flex-row justify-between border-b-[2px]  box-border p-[10px]">
                    <span className=" text-black cursor-pointer ">
                      #01
                    </span>
                    <span className=" text-black cursor-pointer ">
                      2024-12-01
                    </span>
                    <span className=" text-black cursor-pointer ">
                      3000
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
}
