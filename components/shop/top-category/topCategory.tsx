"use client";
import { Category, Item } from "@/models/item";
import ItemCom from "../item/itemCom";
import PrimaryBtn from "../primaryBtn/primaryBtn";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Props{
    itemList:Item[]
}

export default function TopCategoryCom({itemList}:Props) {

  const router =  useRouter();

  const[getCategory,setCategory] =  useState<Category>()

  useEffect(()=>{
    const [first] =  itemList
    setCategory(first.category)
  },[])

  return (
    <>
      <div className=" w-full flex flex-row justify-between py-[40px]">
        <div className="flex flex-col gap-[6px]">
          <h2 className=" text-[24px] font-semibold text-black">{getCategory?.name}</h2>
          <h2 className=" text-[14px] font-medium text-black">
            Get the {getCategory?.name} to your home
          </h2>
        </div>
        <PrimaryBtn
          isIcon={false}
          icon={undefined}
          name={"View More"}
          height={"20"}
          action={() => {
            router.push(`/category/${getCategory?.id}`)
          }}
        />
      </div>
      <div className=" w-full  grid grid-cols-5">
        {itemList.map((item)=>(
            <ItemCom item={item} />
        ))}
      </div>
    </>
  );
}
