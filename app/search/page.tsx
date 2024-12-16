"use client";
import { getAllFeatures } from "@/api/item/getAllFeatures";
import { searchItems } from "@/api/item/searchItems";
import ItemCom from "@/components/shop/item/itemCom";
import Pagination from "@/components/shop/pagination/pagination";
import PrimaryBtn from "@/components/shop/primaryBtn/primaryBtn";
import {SelectPrimary} from "@/components/shop/select/select";
import WrapperContainer from "@/components/wrappers/wrapperContainer";
import data from "@/data/sort.json";
import {
  Category,
  FeaturesResponseDTO,
  Item,
  ProductSearchDTO,
  ProductSearchResponse,
} from "@/models/item";
import { pages } from "next/dist/build/templates/app-page";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();
  const [getStartPrice,setStartPrice] = useState("");
  const [getEndPrice,setEndPrice] = useState("");
  const [getFreshness, setFreshness] = useState(0);
  const [getSelectedSort, setSelectedSort] = useState("");
  const [getSelectCategory, setSelectCategory] = useState("");
  const [ItemCount, setItemCount] = useState(0);
  const [getPages, setPages] = useState(0);
  const [getItemList, setItemList] = useState<Item[] | null>(null);
  const [getFirstNum,setFirstNum] =useState(0);

  useEffect(()=>{
    console.log(getFirstNum)
  },[getFirstNum])


  const [getCategoryList, setCategoryList] = useState<Category[]>([
    {
      id: 0,
      name: "first",
      emoji: ""
    },
  ]);

  const getAllFeaturesAction = async () => {
    const response: FeaturesResponseDTO = await getAllFeatures();
    setCategoryList(response.categoryList);
    console.log(getCategoryList);
  };

  const search = async (
    categoryName: string,
    freshness: number,
    priceRangeStart: number,
    priceRangeEnd: number,
    sortText: string,
    first: number,
    text:string
  ) => {
    const searchDTO: ProductSearchDTO = {
      categoryName: categoryName,
      freshness: freshness,
      priceRangeStart: priceRangeStart,
      priceRangeEnd: priceRangeEnd,
      sortText: sortText,
      first: first,
      text: text
    };

    const res: ProductSearchResponse = await searchItems(searchDTO);
    setItemList(res.items);
    setItemCount(res.allItemCount);
    let perPage = 5;
    let count = Math.ceil(res.allItemCount / perPage);
    setPages(count);
  };

  const searchAction = useCallback(() => {
    const text = searchParams.get('text');
    if(text){
      search("", 0, 0, 0, "", getFirstNum,text);
    }else{
      search("", 0, 0, 0, "", getFirstNum,"");
    }
    
  }, [getFirstNum]);

  useEffect(() => {
    getAllFeaturesAction();
    searchAction();
    console.log(getSelectedSort);
    console.log(getStartPrice)
  }, [getFirstNum,getStartPrice]);

  const freshness = [
    { id: 1, name: "1D", value: 1 },
    { id: 2, name: "2D", value: 2 },
    { id: 3, name: "3D", value: 3 },
    { id: 4, name: "4D", value: 4 },
    { id: 5, name: "5D", value: 5 },
    { id: 6, name: "6D", value: 6 },
    { id: 7, name: "7D", value: 7 },
    { id: 8, name: "8D", value: 8 },
    { id: 9, name: "9D", value: 9 },
    { id: 10, name: "10D", value: 10 },
  ];

  return (
    <section className=" flex flex-col w-full bg-white min-h-screen mobile:mt-0 mt-[80px]">
      <WrapperContainer>
        <div className=" w-full flex flex-col gap-[10px] mt-[30px]">
          <div className=" w-full flex flex-row justify-between mobile:flex-col border shadow-lg gap-[10px] border-zinc-300 rounded-[30px] box-border p-[26px]">
            {/* category */}
            <div className=" flex flex-col gap-[10px]">
              <span className=" text-black font-semibold text-[18px]">
                🍓 Category
              </span>
              <SelectPrimary
                lable={"All"}
                dataList={getCategoryList}
                setSelectedValue={setSelectCategory}
              />
            </div>
            {/* freshness */}
            <div className=" flex flex-col gap-[10px]">
              <span className=" text-black font-semibold text-[18px]">
                🍑 Freshness (Days)
              </span>
              <div className=" grid grid-cols-5 gap-[10px]">
                {freshness.map((data) => (
                  <div onClick={()=>{setFreshness(data.value)}} className=" flex flex-row items-center justify-center cursor-pointer border-[2px] box-border px-[8px] py-[8px]  bg-[#ABFF52] border-black rounded-[50px]">
                    <span className=" text-black font-medium text-[15px]">
                      {data.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* price */}
            <div className=" flex flex-col gap-[10px]">
              <span className=" text-black font-semibold text-[18px]">
                🥦 Price
              </span>
              <div className=" w-full  flex-col gap-[5px] flex  box-border px-[10px] ">
                <div className=" w-full  box-border p-[5px] bg-[#FAFAFA] rounded-[6px] h-[41px] border  flex flex-row justify-center items-center">
                  <input
                    type="text"
                    name="currency-field"
                    placeholder="min price"
                    className=" bg-[#FAFAFA] w-full h-auto p-[5px] rounded-[6px] text-[#9C9C9C]  "
                    onChange={(e)=>{
                      setStartPrice(e.target.value)
                    }}
                  />
                </div>
              </div>

              <div className=" w-full  flex-col gap-[5px] flex  box-border px-[10px] ">
                <div className=" w-full  box-border p-[5px] bg-[#FAFAFA] rounded-[6px] h-[41px] border  flex flex-row justify-center items-center">
                  <input
                    type="text"
                    name="currency-field"
                    placeholder="max price"
                    className=" bg-[#FAFAFA] w-full h-auto p-[5px] rounded-[6px] text-[#9C9C9C]  "
                    onChange={(e)=>{
                      setEndPrice(e.target.value)
                    }}
                  />
                </div>
              </div>
            </div>
            {/* button */}
            <div className=" flex flex-col gap-[10px]">
              <span className=" text-black font-semibold text-[18px]">
                🥕 Action
              </span>
              <PrimaryBtn
                isIcon={false}
                icon={undefined}
                name={"Search"}
                height={"20px"}
                action={() => {
                  search(getSelectCategory,getFreshness,Number(getStartPrice),Number(getEndPrice),getSelectedSort,getFirstNum,"")
                }}
              />
            </div>
          </div>

          <span className=" text-black font-semibold text-[24px]">
            Fetched Foods
          </span>
          <div className=" w-full flex flex-row justify-between">
            <div className=" flex flex-row">
              <span className=" text-black text-[14px]">
                1-20 of over 2,004 results
              </span>
            </div>
            <div className=" flex flex-row items-center gap-[10px]">
              <span className=" text-black text-[14px] opacity-65">
                Sort by:
              </span>

              <SelectPrimary
                lable={"Sort"}
                dataList={data}
                setSelectedValue={setSelectedSort}
              />
            </div>
          </div>

          <div className=" w-full  flex-wrap flex gap-[10px]">
            {getItemList?.map((item) => (
              <ItemCom item={item}/>
            ))}
          </div>

          <Pagination pageCount={getPages}  setFirstNum={setFirstNum}/>
        </div>
      </WrapperContainer>
    </section>
  );
}
