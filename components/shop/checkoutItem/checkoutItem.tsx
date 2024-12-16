import { Cart } from "@/models/item";
import Image from "next/image";

interface Props{
  cart:Cart
}

export default function CheckoutItem({cart}:Props) {
  const imagePath = `http://localhost:8080/my-fresh-goods-api/product-images/${cart.item.id}/image1.png`
  return (
    <div className=" w-full flex flex-row border border-black box-border p-[12px] gap-[10px] rounded-[12px] bg-white">
      <div className="h-[44px] w-[44px]  flex  flex-row  items-center justify-center rounded-[10px]">
          <Image src={imagePath} width={44} height={44} alt={""}  />
      </div>

      <div className=" flex flex-col w-full">
        <div className=" flex flex-row">
          <span>{cart.item.title} {cart.item.measuringType}</span>
        </div>
        <div className="flex flex-row justify-between w-full">
          <div className="flex gap-[5px]">
            <span>LKR {cart.item.price}</span>
            <span>X{cart.qty}</span>
          </div>
          <div>
            <span>Total: LKR {cart.total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
