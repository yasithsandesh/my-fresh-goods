'use client'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Data{
    id:number,
    name:string
}

interface Props{
    lable:string
    dataList:Data[]
    setSelectedValue:Function
}

export  function SelectPrimary({lable,dataList,setSelectedValue}:Props) {
  return (
    <Select onValueChange={(value)=>{setSelectedValue(value)}}>
      <SelectTrigger className="w-[180px] text-black">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{lable}</SelectLabel>
        
          {dataList.map((data)=>(
              <SelectItem value={data.name}>{data.name}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export  function SelectPrimaryID({lable,dataList,setSelectedValue}:Props) {
  return (
    <Select onValueChange={(value)=>{setSelectedValue(value)}}>
      <SelectTrigger className="w-[180px] text-black">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{lable}</SelectLabel>
        
          {dataList.map((data)=>(
              <SelectItem value={data.id.toString()}>{data.name}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
