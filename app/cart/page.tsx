"use client";
import { getAllCart } from "@/api/item/getAllCart";
import CartItem from "@/components/shop/cart-item/cartItem";
import WrapperContainer from "@/components/wrappers/wrapperContainer";
import { CartItemDTO } from "@/models/item";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export default function Cart() {
  const [getTotal, setTotal] = useState(0);
  const [getCartList, setCartList] = useState<CartItemDTO[]>([
    {
      id: 0,
      cartId: 0,
      itemId: 0,
      itemName: "",
      price: 0,
      qty: 0,
    },
  ]);

  const getCartListAction = async () => {
    const res: CartItemDTO[] = await getAllCart();

    let total = 0;
    res.forEach((item) => {
      let cartItemTotal = item.price*item.qty;
      total =  total + cartItemTotal
    });

    setTotal(total);

    setCartList(res);
  };

  const action = useCallback(() => {
    getCartListAction();
  }, []);

  useEffect(() => {
    action();
  }, []);

  return (
    <section className=" w-full flex flex-col  bg-white min-h-screen mobile:mt-0 mt-[80px]">
      <WrapperContainer>
        <div className=" w-full flex  flex-col gap-[10px]">
          {/* 01 start*/}
          <div className="w-full flex flex-row pt-[16px] pb-[16px] box-border gap-[5px]">
            <span className=" text-black cursor-pointer opacity-65">Home</span>
            <span className=" text-black cursor-pointer opacity-65">{">"}</span>
            <span className=" text-black cursor-pointer">Cart</span>
          </div>

          <div className=" flex rounded-[10px] flex-row justify-center items-center bg-[#93C12D] w-[60px]  box-border p-[10px]">
            <span className=" text-[12px] font-semibold">Cart</span>
          </div>

          <div className=" flex flex-row justify-between w-full ">
            <div className=" flex flex-col justify-center gap-[10px]">
              <span className=" text-black text-[24px] font-semibold">
                Order Your Items
              </span>
              <span className="text-black text-[14px]">
                Checkout your items
              </span>
            </div>

            <div className=" flex flex-col justify-center items-end gap-[10px]">
              <span className=" text-black text-[16px] font-medium">
                {getCartList.length} Items
              </span>

              <span className="text-black text-[36px] font-bold">
                LKR {getTotal}
              </span>
            </div>
          </div>

          <div className=" flex flex-col w-full gap-[5px]">
            {getCartList?.map((cart) => (
              <CartItem data={cart} />
            ))}
          </div>

          {/* ///button */}

          <div
            className={`flex flex-row box-border px-[20px] items-center hover:h-[66px]  duration-200 cursor-pointer  tab:fixed tab:bottom-[10px]  tab:right-[100px] justify-center gap-[10px] py-[12px]  rounded-[16px]   bg-[#93C12D] w-[120px]  h-[60px]`}
          >
            <Link
              className=" text-[18px] font-semibold  text-white  cursor-pointer"
              href={"/checkout"}
            >
              Checkout
            </Link>
          </div>

          {/* ///button */}
        </div>
      </WrapperContainer>
    </section>
  );
}
