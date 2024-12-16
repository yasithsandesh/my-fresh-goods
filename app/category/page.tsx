"use client"
import { getAllFeatures } from "@/api/item/getAllFeatures";
import CategoryCard from "@/components/shop/category/categoryCard";
import WrapperContainer from "@/components/wrappers/wrapperContainer";
import { Category, FeaturesResponseDTO } from "@/models/item";
import { useEffect, useState } from "react";
import emojiCategoryList from "@/data/categoryData.json"

export default function Categories(){

    const[getCategoryList,setCategoryList] = useState<Category[]>()

    useEffect(()=>{
        getAllFeatures().then((res:FeaturesResponseDTO)=>{
       
          const newCategoryList = res.categoryList.map((category)=>{
            let findCategory:Category = {
                id: 0,
                name: "",
                emoji: ""
              }

              for(let emojiCategory of emojiCategoryList){
                if(emojiCategory.name===category.name){
                  findCategory = {...category,emoji:emojiCategory.emoji}
                  return findCategory;
                }
              }

              return category
      
              
          })

          setCategoryList(newCategoryList)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    return(
        <div className=" flex flex-col w-full min-h-screen mt-[80px] bg-white">
            <WrapperContainer>
               
                <div className=" w-full  flex flex-wrap gap-[10px] justify-center mobile:mt-0 mt-[20px] mb-[20px]">
                    {getCategoryList?.map((category)=>(
                        <CategoryCard category={category} />
                    ))}
                </div>
            </WrapperContainer>
        </div>
    )
}