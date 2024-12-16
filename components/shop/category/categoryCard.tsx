import { Category } from "@/models/item";

interface Props {
  category: Category;
}

export default function CategoryCard({ category }: Props) {
  return (
    <div className="w-[96px] flex flex-col p-[16px] items-center justify-center border rounded-[12px]">
      <div className=" flex flex-row justify-center items-center h-[64px] w-[64px]  rounded-full">
        <h2 className=" text-[50px] font-medium cursor-pointer hover:text-[80px] duration-100">
          {category.emoji == null ? "🥒" : category.emoji}
        </h2>
      </div>
      <h2 className=" text-[12px] font-medium text-center text-black">
        {category.name}
      </h2>
    </div>
  );
}
