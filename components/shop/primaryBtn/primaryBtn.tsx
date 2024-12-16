interface Props {
  isIcon: boolean;
  icon: any;
  name: string;
  height:string;
  action:Function
}

const PrimaryBtn = ({ isIcon, icon, name,height,action }: Props) => {

    return (
      <div className={`flex flex-row box-border px-[20px]  gap-[10px] py-[12px] border-[2px] justify-center items-center rounded-[49px]  border-black bg-[#ABFF52] ${height}`} onClick={()=>{action()}}>
        {isIcon?(icon):""}
        <span className=" text-[18px] font-semibold  text-black  cursor-pointer">{name}</span>
      </div>
    );
 
};

export default PrimaryBtn;
