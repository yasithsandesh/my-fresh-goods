"use client";
import { AddToCart } from "@/api/item/addToCart";
import { getSingleItem } from "@/api/item/getSingleItem";

import PrimaryBtn from "@/components/shop/primaryBtn/primaryBtn";
import WrapperContainer from "@/components/wrappers/wrapperContainer";
import { SingleItemResponseDTO } from "@/models/item";
import { ResponseDTO } from "@/models/responseDTO";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import image from "/Users/yasithsandesh/NetBeansProjects/my-fresh-goods-api/web/product-images/1/image1.png";
import ItemCom from "@/components/shop/item/itemCom";

export default function SingleProductView({
  params,
}: {
  params: { slug: string };
}) {

  const imagePath = `http://localhost:8080/my-fresh-goods-api/product-images/${params.slug}/image1.png`;
  
  const [getQty, setQty] = useState<number>(1);

  const [getItemQty, setItemQty] = useState<number>(1);

  const [getResponse, setResponse] = useState<SingleItemResponseDTO>();

  const getItem = async () => {
    const data: SingleItemResponseDTO = await getSingleItem(params.slug);
    setResponse(data);
    setItemQty(data.Item.qty);
  };

  const handleSubmit = useCallback(() => {
    getItem();
  }, [params.slug]);

  useEffect(() => {
    handleSubmit();
  }, []);

  const add = async (itemId: string, qty: string) => {
    const response: ResponseDTO = await AddToCart(itemId, qty);

    if (response.status) {
      console.log(response.message);
    } else {
      console.log(response.message);
    }
  };

  return (
    <section className=" w-full flex flex-col bg-white min-h-screen mobile:mt-0 mt-[80px]">
      <WrapperContainer>
        <div className="w-full flex flex-col">
          {/* 01 start*/}
          <div className="w-full flex flex-row pt-[16px] pb-[16px] box-border gap-[5px]">
            <span className=" text-black cursor-pointer opacity-65">Home</span>
            <span className=" text-black cursor-pointer opacity-65">{">"}</span>
            <span className=" text-black cursor-pointer">Product</span>
          </div>

          {/* image and detalis section */}
          <div className="w-full flex flex-row  mid:flex-col mobile:flex-col gap-[10px]">
            {/* image section */}
            <div className="w-2/5 mobile:w-full mid:w-full ">
              <div className="w-[460px] h-[460px] mobile:w-full border border-zinc-300 rounded-[10px] flex flex-row justify-center items-center">
                <Image src={imagePath} width={300} height={300} alt={""} />
              </div>
            </div>

            {/* detalis section */}
            <div className="w-3/5 mobile:w-full  mid:w-full mobile:items-center gap-[30px] flex box-border mobile:pl-0 mobile:pr-0 mobile:pt-[20px] pl-[20px] pr-[20px] pb-[20px] flex-col">
              {/* garden */}
              <div className="min-w-[200px] w-auto max-w-[240px] p-[15px] gap-[5px] box-border items-center flex flex-row border-[2px] rounded-[10px] bg-[#F2FFF3]">
                <div>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M32.2972 17.3786L31.125 16.4408V31.8751H33C33.6213 31.8751 34.125 32.3788 34.125 33.0001C34.125 33.6215 33.6213 34.1251 33 34.1251H3.00004C2.37871 34.1251 1.87504 33.6215 1.87504 33.0001C1.87504 32.3788 2.37871 31.8751 3.00004 31.8751H4.87504V16.4408L3.70282 17.3786C3.21765 17.7668 2.50969 17.6881 2.12157 17.203C1.73343 16.7177 1.81209 16.0097 2.29726 15.6217L14.4861 5.87056C16.5405 4.22707 19.4596 4.22707 21.5139 5.87056L33.7027 15.6217C34.188 16.0097 34.2666 16.7177 33.8785 17.203C33.4903 17.6881 32.7825 17.7668 32.2972 17.3786ZM18 10.1251C15.7218 10.1251 13.875 11.972 13.875 14.2501C13.875 16.5283 15.7218 18.3751 18 18.3751C20.2782 18.3751 22.125 16.5283 22.125 14.2501C22.125 11.972 20.2782 10.1251 18 10.1251ZM20.6188 19.9675C19.9306 19.8751 19.0714 19.8751 18.0741 19.8751H17.926C16.9287 19.8751 16.0693 19.8751 15.3813 19.9675C14.6438 20.0666 13.9369 20.2903 13.3636 20.8637C12.7902 21.437 12.5666 22.144 12.4674 22.8814C12.3749 23.5694 12.375 24.4288 12.375 25.4261V31.8751H14.625H21.375H23.625V25.4261V25.2407C23.6247 24.322 23.6193 23.5265 23.5326 22.8814C23.4334 22.144 23.2099 21.437 22.6365 20.8637C22.0632 20.2903 21.3562 20.0666 20.6188 19.9675Z"
                      fill="#58CA00"
                    />
                    <g opacity="0.5">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.125 14.25C16.125 13.2145 16.9644 12.375 18 12.375C19.0356 12.375 19.875 13.2145 19.875 14.25C19.875 15.2856 19.0356 16.125 18 16.125C16.9644 16.125 16.125 15.2856 16.125 14.25Z"
                        fill="#58CA00"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.125 14.25C16.125 13.2145 16.9644 12.375 18 12.375C19.0356 12.375 19.875 13.2145 19.875 14.25C19.875 15.2856 19.0356 16.125 18 16.125C16.9644 16.125 16.125 15.2856 16.125 14.25Z"
                        fill="#58CA00"
                      />
                    </g>
                    <path
                      opacity="0.5"
                      d="M18.0741 19.875C19.0713 19.875 19.9307 19.8748 20.6187 19.9674C21.3563 20.0665 22.0631 20.2902 22.6365 20.8635C23.2098 21.437 23.4335 22.1437 23.5326 22.8813C23.6193 23.5263 23.6247 24.3219 23.625 25.2405V31.875H12.375V25.4259C12.375 24.4287 12.3749 23.5693 12.4674 22.8813C12.5666 22.1437 12.7902 21.437 13.3635 20.8635C13.9369 20.2902 14.6438 20.0665 15.3813 19.9674C16.0694 19.8748 16.9287 19.875 17.9259 19.875H18.0741Z"
                      fill="#58CA00"
                    />
                    <path
                      opacity="0.5"
                      d="M24 4.5H27.75C28.1642 4.5 28.5 4.83579 28.5 5.25V11.4593L23.25 7.25932V5.25C23.25 4.83579 23.5859 4.5 24 4.5Z"
                      fill="#58CA00"
                    />
                  </svg>
                </div>

                <div className=" flex flex-col">
                  <span className=" text-black text-[12px] font-medium cursor-pointer opacity-65">
                    From
                  </span>
                  <span className=" text-black text-[15px] font-semibold cursor-pointer ">
                    @{getResponse?.Item.garden.gradenName}
                  </span>
                </div>
              </div>

              {/* item title */}

              <div className="w-full flex">
                <span className=" text-black text-[30px] font-medium  ">
                  {getResponse?.Item.title}
                </span>
              </div>

              {/* item price */}

              <div className="w-full flex">
                <span className=" text-black text-[32px] font-semibold  ">
                  LKR {getResponse?.Item.price}
                </span>
              </div>

              <hr className="border-zinc-300" />

              {/* Details section */}

              <div className=" w-full flex flex-row mobile:flex-col justify-between gap-[20px]">
                <div className=" flex flex-col gap-[5px] w-full">
                  <span className=" text-black text-[16px] font-medium cursor-pointer opacity-65">
                    Category :
                  </span>
                  <div className="flex cursor-pointer flex-row  p-[10px] gap-[5px] box-border rounded-[22px] bg-white border-[2px] border-[#00B126]">
                    <span className="text-[20px]">🥕</span>
                    <span className=" text-[#00B126] text-[20px] font-semibold">
                      {getResponse?.Item.category.name}
                    </span>
                  </div>
                </div>

                <div className=" flex flex-col gap-[5px] w-full">
                  <span className=" text-black text-[16px] font-medium cursor-pointer opacity-65">
                    freshness:
                  </span>
                  <div className="flex cursor-pointer flex-row justify-center items-center rounded-[100px] box-border h-[50px] w-[50px] bg-[#ABFF52] border-[2px] border-[#000]">
                    <span className=" text-black">
                      {getResponse?.Item.freshness}D
                    </span>
                  </div>
                </div>

                <div className=" flex flex-col gap-[5px] w-full">
                  <span className=" text-black text-[16px] font-medium cursor-pointer opacity-65">
                    Measure Unit :
                  </span>
                  <div className="flex cursor-pointer flex-row justify-center items-center rounded-[100px] box-border h-[50px] w-[50px] bg-[#F2FFF3] border-[2px] border-[#000]">
                    <span className=" text-black">
                      {getResponse?.Item.measuringType.toLowerCase()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Btn section */}

              <div className=" w-full flex flex-row gap-[10px]">
                {/* QTY */}
                <div className=" flex flex-row items-center justify-center gap-[10px] box-border px-[20px] py-[12px]  bg-[#F2F2F2] border-[2px] border-zinc-300 rounded-[44px]">
                  <span
                    className=" text-black cursor-pointer text-[18px] opacity-65"
                    onClick={() => {
                      if (getQty != 0) {
                        setQty(getQty - 1);
                      }
                    }}
                  >
                    -
                  </span>
                  <span className=" text-black cursor-pointer  text-[20px] font-bold">
                    {getQty}
                  </span>
                  <span
                    className=" text-black cursor-pointer text-[18px] opacity-65"
                    onClick={() => {
                      if (getQty < getItemQty) {
                        setQty(getQty + 1);
                      }
                    }}
                  >
                    +
                  </span>
                </div>

                {/* ADD TO CART */}

                <PrimaryBtn
                  isIcon={true}
                  icon={
                    <svg
                      width="26"
                      height="27"
                      viewBox="0 0 26 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_266_232)">
                        <path
                          d="M25.3387 3.84863H21.2787C20.5037 3.84863 19.7316 4.43287 19.5208 5.17873L18.4241 9.0604C18.2987 9.02548 18.1667 9.00529 18.0293 9.00529H8.79628C8.35048 7.01759 6.57281 5.52755 4.45259 5.52755C1.9974 5.52755 0 7.52503 0 9.98004C0 12.2266 1.67301 14.089 3.83837 14.3893C3.8374 14.4183 3.83758 14.4475 3.84049 14.4773L4.07062 16.8101C4.15218 17.6365 4.86656 18.2839 5.69707 18.2839H15.8778C16.6561 18.2839 17.4249 17.6953 17.628 16.9441L18.9011 12.2359L18.9012 12.2356L20.7934 5.53839C20.8448 5.35667 21.0896 5.17132 21.2786 5.17132H25.3386C25.7038 5.17132 25.9999 4.87533 25.9999 4.51002C25.9999 4.14472 25.7039 3.84863 25.3387 3.84863ZM1.3226 9.98004C1.3226 8.25422 2.72668 6.85015 4.45259 6.85015C6.1785 6.85015 7.58248 8.25422 7.58248 9.98004C7.58248 11.7059 6.17841 13.1099 4.45259 13.1099C2.72677 13.1099 1.3226 11.706 1.3226 9.98004ZM16.3513 16.5988C16.3028 16.7783 16.0637 16.9613 15.8778 16.9613H5.69707C5.55194 16.9613 5.40116 16.8247 5.38688 16.6802L5.15956 14.3758C7.16763 14.0539 8.73033 12.3848 8.89019 10.3279H18.0292C18.0355 10.3279 18.0413 10.3282 18.0462 10.3285C18.0452 10.3334 18.044 10.339 18.0423 10.3451L16.3513 16.5988Z"
                          fill="#000002"
                        />
                        <path
                          d="M7.62723 19.0371C6.49305 19.0371 5.57031 19.9598 5.57031 21.094C5.57031 22.2282 6.49305 23.1509 7.62723 23.1509C8.7614 23.1509 9.68423 22.2282 9.68423 21.094C9.68423 19.9598 8.7614 19.0371 7.62723 19.0371ZM7.62723 21.8283C7.22233 21.8283 6.89292 21.4989 6.89292 21.094C6.89292 20.6891 7.22233 20.3597 7.62723 20.3597C8.03212 20.3597 8.36162 20.6891 8.36162 21.094C8.36162 21.4989 8.03212 21.8283 7.62723 21.8283Z"
                          fill="#000002"
                        />
                        <path
                          d="M14.1492 19.0371C13.015 19.0371 12.0923 19.9598 12.0923 21.094C12.0923 22.2282 13.015 23.1509 14.1492 23.1509C15.2834 23.1509 16.2061 22.2282 16.2061 21.094C16.2061 19.9598 15.2834 19.0371 14.1492 19.0371ZM14.1492 21.8283C13.7443 21.8283 13.4149 21.4989 13.4149 21.094C13.4149 20.6891 13.7443 20.3597 14.1492 20.3597C14.5541 20.3597 14.8835 20.6891 14.8835 21.094C14.8835 21.4989 14.5541 21.8283 14.1492 21.8283Z"
                          fill="#000002"
                        />
                        <path
                          d="M5.11375 11.618V10.6414H6.09053C6.45575 10.6414 6.75184 10.3454 6.75184 9.98014C6.75184 9.61484 6.45575 9.31884 6.09053 9.31884H5.11375V8.34197C5.11375 7.97666 4.81766 7.68066 4.45245 7.68066C4.08723 7.68066 3.79114 7.97666 3.79114 8.34197V9.31875H2.81462C2.44941 9.31875 2.15332 9.61475 2.15332 9.98005C2.15332 10.3454 2.44941 10.6414 2.81462 10.6414H3.79114V11.6179C3.79114 11.9832 4.08723 12.2792 4.45245 12.2792C4.81766 12.2792 5.11375 11.9832 5.11375 11.618Z"
                          fill="#000002"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_266_232">
                          <rect
                            width="26"
                            height="26"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                  name="Add to Cart"
                  height={"h-[60px]"}
                  action={() => {
                    add(params.slug, getQty.toString());
                  }}
                />
                
              </div>
            </div>
          </div>
        </div>
      </WrapperContainer>

      <div className=" w-full flex flex-col bg-[#ECFFDD] border-zinc-300 border">
        <WrapperContainer>
          <div className=" w-full flex flex-col gap-[15px] py-[40px] box-border">
            <span className=" text-black  text-[24px] font-semibold">
              Item Description
            </span>
            <p className=" text-black  text-[14px] font-medium">
              {getResponse?.Item.description}
            </p>
          </div>
        </WrapperContainer>
      </div>

      {/* similer items */}
      <div className=" w-full flex flex-col  bg-white">
        <WrapperContainer>
          <div className=" w-full flex flex-col gap-[15px] py-[40px]">
            <div className=" w-full flex mobile:flex-col  flex-row justify-between">
              <div className="flex flex-col gap-[10px]">
                <span className=" text-black  text-[24px] font-semibold">
                  Similar Product
                </span>
                <span className=" text-black  text-[14px] ">
                  Try the sweetness of fresh fruits
                </span>
              </div>

              <PrimaryBtn
                isIcon={false}
                icon={undefined}
                name={"View More"}
                height={"h-[40px]"}
                action={() => {}}
              />
            </div>

            {/* /////////////////////////// */}
            <div className=" w-full gap-[10px] mobile:items-center  mobile:grid-cols-1 grid grid-cols-5">
              {getResponse?.similarItemsList.map((data) => (
                <ItemCom  item={data}/>
              ))}
            </div>
          </div>
        </WrapperContainer>
      </div>
    </section>
  );
}
