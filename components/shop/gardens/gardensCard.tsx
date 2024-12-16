

interface Props {
  color: string;
  title:string
}

export default function GardensCard({ color,title }: Props) {
  return (
    <div
      className={`w-[600px]  min-h-[600px] flex flex-row justify-center items-center ${color} section rounded-[10px]`}
    >
      <span className=" text-black cursor-pointer">{title}</span>
    </div>
  );
}
