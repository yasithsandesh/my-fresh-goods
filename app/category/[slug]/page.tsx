"use client";
import { categorySearchItem } from "@/api/item/categorySearchItem";
import ItemCom from "@/components/shop/item/itemCom";
import Pagination from "@/components/shop/pagination/pagination";
import WrapperContainer from "@/components/wrappers/wrapperContainer";
import { Item, ProductSearchResponse } from "@/models/item";
import { useCallback, useEffect, useState } from "react";

export default function CategoryProducts({
  params,
}: {
  params: { slug: string };
}) {
  const [getFirstnum, setFirstNum] = useState<number>(0);
  const [getPages, setPages] = useState<number>(0);
  const [getItemList, setItemList] = useState<Item[] | undefined>();
  const [getItemCount, setItemCount] = useState<number>(0);

  const getItemsAction = useCallback((page: string) => {
    categorySearchItem(params.slug, page)
      .then((res: ProductSearchResponse) => {
        setItemList(res.items);
        setItemCount(res.allItemCount);
        console.log(res.items)

        let perPage = 10;
        let count = Math.ceil(res.allItemCount / perPage);
        setPages(count);
      })
      .catch(() => {});
  }, []);

  useEffect(()=>{
    getItemsAction("0")
  },[])

  return (
    <div className=" w-full flex flex-col mt-[100px] ">
      {getItemCount == 0 ? (
        <div></div>
      ) : (
        <>
          <WrapperContainer>
            <div className=" w-full  gap-[10px] grid grid-cols-5 mobile:grid-cols-1 ">
                {getItemList?.map((item)=>(
                    <ItemCom item={item}/>
                ))}
            </div>
          </WrapperContainer>
         {getPages!=1?(
           <div className=" w-full flex flex-row justify-center items-end">
           <Pagination pageCount={getPages} setFirstNum={setFirstNum} />
         </div>
         ):(null)}
        </>
      )}
    </div>
  );
}
