"use client";
import { LoadHomeData } from "@/api/home/loadHomeData";
import Header from "@/components/header/Header";
import CategoryCard from "@/components/shop/category/categoryCard";
import ItemCom from "@/components/shop/item/itemCom";
import PrimaryBtn from "@/components/shop/primaryBtn/primaryBtn";
import TopCategoryCom from "@/components/shop/top-category/topCategory";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { ImagesSlider } from "@/components/ui/images-slider";
import WrapperContainer from "@/components/wrappers/wrapperContainer";
import { Category, Item, LoadHomeResponse, TopCategory } from "@/models/item";
import { motion } from "framer-motion";
import Image from "next/image";
import emojiCategoryList from "@/data/categoryData.json";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const item: Item = {
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
    emoji: "",
  },
  qty: 0,
  itemStatus: {
    id: 0,
    status: "",
  },
};

export default function Home() {
  const [imageWidth, setImageWidth] = useState(0);
  const imageDivRef = useRef<HTMLDivElement>(null);
  const [getCategoryList, setCategoryList] = useState<Category[]>();
  const [getTopCategoryList, setTopCategoryList] = useState<TopCategory[]>();

  const [getSearchText,setSearchText] = useState("");

  const router = useRouter();

  const images = [
    "http://localhost:8080/my-fresh-goods-api/home-images/home1.png",
    "http://localhost:8080/my-fresh-goods-api/home-images/home2.png",
  ];

  useEffect(() => {
    if (imageDivRef.current) {
      setImageWidth(imageDivRef.current.clientWidth);
    }
  }, []);

  useEffect(() => {
    LoadHomeData().then((response: LoadHomeResponse) => {
      const newCategoryList = response.categorys.map((category) => {
        let findCategory: Category = {
          id: 0,
          name: "",
          emoji: "",
        };
        for (let emojiCategory of emojiCategoryList) {
          if (emojiCategory.name === category.name) {
            findCategory = { ...category, emoji: emojiCategory.emoji };
          }
        }

        return findCategory;
      });

      setCategoryList(newCategoryList);
      setTopCategoryList(response.topCategorys);
    });
  }, []);

  return (
    <div className=" w-full flex flex-col items-center min-h-screen bg-white mt-[80px]">
      <ImagesSlider images={images} className="h-[450px]  mobile:w-[100px]">
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <GradualSpacing
            className="text-[36px] font-bold text-white"
            text={"Buy Fresh Groceries & Organic Food."}
          />
          <GradualSpacing
            className="text-[20px] font-normal text-white text-center"
            text="Fresh Foods from Home Gardens"
          />

          <div className=" w-[80%]  flex-row gap-[5px] px-[10px]  flex box-border mt-[10px]">
            <div className=" w-full  box-border p-[5px] bg-[#FAFAFA] rounded-[10px] h-[41px] border  flex flex-row justify-center items-center">
              <input
                type="text"
                onChange={(e)=>{
                  setSearchText(e.target.value)
                  e.preventDefault;
                }}
                placeholder="Search all moodles"
                className=" bg-[#FAFAFA] w-full h-auto p-[5px] rounded-[6px] text-[#9C9C9C]  "
              />
            </div>

            <div
              className={`flex flex-row box-border px-[20px]  gap-[10px] py-[12px] w-[148px] justify-center items-center rounded-[49px]  bg-[#53D82E] h-[46px]`}
              onClick={() => {
                router.push(`/search?text=${getSearchText}`)
              }}
            >
              <span className=" text-[18px] font-semibold  text-white  cursor-pointer">
                {"Buy Now"}
              </span>
            </div>
          </div>
        </motion.div>
      </ImagesSlider>
      <WrapperContainer>
        <div className="w-full flex flex-col pt-[40px]">
          <div className=" w-full flex-row flex gap-[20px] py-[20px] box-border border-b  mobile:overflow-x-scroll mid:overflow-x-scroll">
            {getCategoryList?.map((category) => (
              <CategoryCard category={category} />
            ))}
          </div>

          <div className=" w-full flex flex-col pb-[40px]">
            {getTopCategoryList?.map((topCategory: TopCategory) => (
              <TopCategoryCom itemList={topCategory.items} />
            ))}
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
}
