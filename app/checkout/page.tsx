"use client";

import getCheckout from "@/api/checkout/getCheckout";
import ShimmerButton from "@/components/magicui/shimmer-button";
import CheckoutItem from "@/components/shop/checkoutItem/checkoutItem";
import PrimaryBtn from "@/components/shop/primaryBtn/primaryBtn";
import {
  SelectPrimary,
  SelectPrimaryID,
} from "@/components/shop/select/select";
import WrapperContainer from "@/components/wrappers/wrapperContainer";
import {
  Address,
  Cart,
  City,
  GetCheckoutDTO,
  GetCheckoutResponse,
} from "@/models/item";
import { useCallback, useEffect, useState } from "react";
import OnCheckout from "@/api/checkout/OnCheckout";

export default function Checkout() {
  const [getFirstName, setFirstName] = useState<string>(" ");
  const [getLastName, setLastName] = useState("");
  const [getLine1, setLine1] = useState("");
  const [getLine2, setLine2] = useState("");
  const [getMobile, setMobile] = useState("");
  const [getPostalCode, setPostalCode] = useState("");
  const [isCurrentAddress, setCurrentAddress] = useState<boolean>(false);

  const [getSelectedCity, setSelectedCity] = useState<string>("");
  const [getAddress, setAddress] = useState<Address>();
  const [getCityList, setCityList] = useState<City[]>([
    {
      id: 0,
      name: "first",
    },
  ]);
  const [getCartList, setCartList] = useState<Cart[]>([
    {
      id: 0,
      item: {
        id: 0,
        title: "",
        measuringType: "",
        price: 0,
        description: "",
        freshness: 0,
        garden: {
          id: 0,
          gradenName: "",
          description: "",
          gradenAddress: {
            id: 0,
            address: "",
            postalCode: "",
            city: {
              id: 0,
              name: "",
            },
          },
        },
        category: {
          id: 0,
          name: "",
          emoji: ""
        },
        qty: 0,
        itemStatus: {
          id: 0,
          status: "",
        },
      },
      qty: 0,
      total: 0
    },
  ]);

  const [getSubtotal,setSubTotal] = useState(0);

  const checkout = async () => {
    const res: GetCheckoutResponse = await getCheckout();
    setCityList(res.data.cityList);
    setAddress(res.data.address);

    let subtotal:number = 0
   const newCartList = res.data.cartList.map((cart)=>{
    const total = cart.qty*cart.item.price
    subtotal = subtotal+total
    return{...cart,total:total}
   })

   setCartList(newCartList)
   setSubTotal(subtotal)
  
  };

  const getCheckoutAction = useCallback(async () => {
    await checkout();
  }, []);

  useEffect(() => {
    getCheckoutAction();
  }, []);

  const onCheckoutAction = async (
    isCurrentAddress: boolean,
    firstName: string,
    lastName: string,
    line1: string,
    line2: string,
    postalCode: string,
    mobile: string,
    getSelectedCity: string
  ) => {
    const data = {
      isCurrentAddress: isCurrentAddress,
      firstName: firstName,
      lastName: lastName,
      cityId: Number(getSelectedCity),
      line1: line1,
      line2: line2,
      postalCode: postalCode,
      mobile: mobile,
    };

    await OnCheckout(data);
  };

  useEffect(() => {
    if (isCurrentAddress) {
      setFirstName(getAddress?.firstName as string);
      setLastName(getAddress?.lastName as string);
      setLine1(getAddress?.line1 as string);
      setLine2(getAddress?.line2 as string);
      setPostalCode(getAddress?.postalCode as string);
      setMobile(getAddress?.mobile as string);
    } else {
      setFirstName("Jho");
      setLastName("Perera");
      setLine1("Example: Sam’s Pizza ");
      setLine2("Example: 123 Main stree");
      setPostalCode("xxxxx");
      setMobile("07X XXX XXX");
    }
  }, [isCurrentAddress]);

  return (
    <section className=" w-full min-h-screen flex flex-row  mid:flex-col mobile:flex-col-reverse">
      {/* section1 */}
      <div className=" w-1/2 mobile:w-full flex flex-col mid:w-full  box-border px-[90px] py-[50px] gap-[20px]">
        <div className=" flex flex-col gap-[5px]">
          <span className=" text-black font-semibold text-[20px]">
            Shipping Details
          </span>
          <p className=" text-black text-[16px] font-medium opacity-65">
            Complete your purchase item by providing your Shipping Details
          </p>
        </div>

        <div className=" flex flex-row items-center gap-[10px]">
          <input
            type="checkbox"
            className=" bg-white"
            onChange={(e) => {
              setCurrentAddress(e.target.checked);
            }}
          />
          <span className=" text-black text-[14px]">
            Same as your current address?
          </span>
          <SelectPrimaryID
            lable={"Select City"}
            dataList={getCityList}
            setSelectedValue={setSelectedCity}
          />
        </div>

        <div className=" flex flex-col gap-[10px]">
          <div className=" w-full flex flex-row mobile:flex-col gap-[10px]  justify-between">
            <div className=" w-full  flex-col gap-[5px]  flex box-border">
              <span className=" text-[#9C9C9C]  ">First Name</span>
              <div className=" w-full  box-border p-[5px] bg-[#FAFAFA] rounded-[6px] h-[41px] border  flex flex-row justify-center items-center">
                <input
                  type="text"
                  placeholder={getFirstName}
                  className=" bg-[#FAFAFA] w-full h-auto p-[5px] rounded-[6px] text-[#9C9C9C]  "
                />
              </div>
            </div>

            <div className=" w-full  flex-col gap-[5px] flex  box-border  ">
              <span className=" text-[#9C9C9C]  ">Last Name</span>
              <div className=" w-full  box-border p-[5px] bg-[#FAFAFA] rounded-[6px] h-[41px] border  flex flex-row justify-center items-center">
                <input
                  type="text"
                  placeholder={getLastName}
                  className=" bg-[#FAFAFA] w-full h-auto p-[5px] rounded-[6px] text-[#9C9C9C]  "
                />
              </div>
            </div>
          </div>

          <div className=" w-full flex flex-row mobile:flex-col gap-[10px]  justify-between">
            <div className=" w-full  flex-col gap-[5px] flex  box-border  ">
              <span className=" text-[#9C9C9C]  ">Address Line 1</span>
              <div className=" w-full  box-border p-[5px] bg-[#FAFAFA] rounded-[6px] h-[41px] border  flex flex-row justify-center items-center">
                <input
                  type="text"
                  placeholder={getLine1}
                  className=" bg-[#FAFAFA] w-full h-auto p-[5px] rounded-[6px] text-[#9C9C9C]  "
                />
              </div>
            </div>
          </div>

          <div className=" w-full flex flex-row mobile:flex-col gap-[10px]  justify-between">
            <div className=" w-full  flex-col gap-[5px] flex  box-border  ">
              <span className=" text-[#9C9C9C]  ">Address Line 2</span>
              <div className=" w-full  box-border p-[5px] bg-[#FAFAFA] rounded-[6px] h-[41px] border  flex flex-row justify-center items-center">
                <input
                  type="text"
                  placeholder={getLine2}
                  className=" bg-[#FAFAFA] w-full h-auto p-[5px] rounded-[6px] text-[#9C9C9C]  "
                />
              </div>
            </div>
          </div>

          <div className=" w-full flex flex-row mobile:flex-col gap-[10px]  justify-between">
            <div className=" w-full  flex-col gap-[5px]  flex box-border">
              <span className=" text-[#9C9C9C]  ">Postal Code</span>
              <div className=" w-full  box-border p-[5px] bg-[#FAFAFA] rounded-[6px] h-[41px] border  flex flex-row justify-center items-center">
                <input
                  type="text"
                  placeholder={getPostalCode}
                  className=" bg-[#FAFAFA] w-full h-auto p-[5px] rounded-[6px] text-[#9C9C9C]  "
                />
              </div>
            </div>

            <div className=" w-full  flex-col gap-[5px] flex  box-border  ">
              <span className=" text-[#9C9C9C]  ">Mobile</span>
              <div className=" w-full  box-border p-[5px] bg-[#FAFAFA] rounded-[6px] h-[41px] border  flex flex-row justify-center items-center">
                <input
                  type="text"
                  placeholder={getMobile}
                  className=" bg-[#FAFAFA] w-full h-auto p-[5px] rounded-[6px] text-[#9C9C9C]  "
                />
              </div>
            </div>
          </div>
        </div>
        {/* //////////////////////////end */}

        <div className=" flex flex-row mobile:flex-col justify-end gap-[10px]">
          <ShimmerButton className="shadow-2xl mobile:w-full">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Home
            </span>
          </ShimmerButton>
          <PrimaryBtn
            isIcon={false}
            icon={undefined}
            name={"Process to Checkout"}
            height={"50px"}
            action={async() => {
             await  onCheckoutAction(
                isCurrentAddress,
                getFirstName,
                getLastName,
                getLine1,
                getLine2,
                getPostalCode,
                getMobile,
                getSelectedCity
              );
            }}
          />
        </div>
      </div>
      {/* section2 */}
      <div className=" w-1/2 mobile:w-full flex flex-col mid:w-full  box-border px-[90px] py-[50px] gap-[20px] bg-[#D1FB96]">
        <div className="w-full grid grid-cols-1 gap-[10px]">
          {getCartList.map((cartItem) => (
            <CheckoutItem cart={cartItem} />
          ))}
        </div>

        <div className=" flex flex-col w-full border border-black bg-[#EFFEDA] rounded-[24px]">
          <div className=" flex flex-col w-full box-border px-[26px]  py-[20px]">
            <span className=" text-black font-semibold text-[24px]">
              Shipping Details
            </span>
            <p className=" text-black text-[16px] font-medium opacity-65">
              12 items
            </p>
          </div>

          <div className=" flex flex-col w-full box-border px-[26px] border-t border-black  py-[20px]">
            <div className=" w-full flex flex-row mobile:flex-col  items-center justify-between">
              <span className=" text-black text-[16px] font-medium opacity-65">
                Subtotal:
              </span>
              <span className=" text-black font-semibold text-[20px]">
                LKR {getSubtotal}
              </span>
            </div>

            <div className=" w-full flex flex-row mobile:flex-col  items-center justify-between">
              <span className=" text-black text-[16px] font-medium opacity-65">
                Shipping :
              </span>
              <span className=" text-black text-[16px] font-medium opacity-65">
                LKR 1000
              </span>
            </div>
          </div>

          <div className=" flex flex-col w-full box-border px-[26px] border-t border-black  py-[20px]">
            <div className=" w-full flex flex-row mobile:flex-col  items-center justify-between">
              <span className=" text-black text-[16px] font-medium opacity-65">
                Total:
              </span>
              <span className=" text-black font-semibold text-[20px]">
                LKR {getSubtotal+1000}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
