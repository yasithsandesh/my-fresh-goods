import { AddToCart } from "@/api/item/addToCart";
import { Item } from "@/models/item";
import { ResponseDTO } from "@/models/responseDTO";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface props {
  item: Item;
}

export default function ItemCom({ item }: props) {
  const router = useRouter();

  const imagePath = `http://localhost:8080/my-fresh-goods-api/product-images/${item.id}/image1.png`;

  return (
    <div className="flex flex-col w-[210px] bg-[#F9F9F9] rounded-[20px] shadow-lg box-border p-[10px]">
      <div
        className="h-[180px] flex justify-center items-center bg-white rounded-[20px]"
        onClick={() => {
          router.push(`/${item.id}`);
        }}
      >
        <Image src={imagePath} width={150} height={150} alt={""} />
      </div>
      <div className="w-full box-border flex flex-col p-[20px]">
        <div className="w-full flex">
          <span className="text-[12px] font-semibold text-black">
            {item?.title}
          </span>
        </div>
        <div className=" w-full flex flex-row justify-between  items-center gap-[10px]">
          <span className="text-[20px] font-semibold text-black">
            LKR {item?.price}
          </span>

          <svg
            width="26"
            height="27"
            viewBox="0 0 26 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={async () => {
              const res: ResponseDTO = await AddToCart(item.id.toString(), "1");
              if (res.status) {
                router.push("/cart");
              }
            }}
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
        </div>
      </div>
    </div>
  );
}
