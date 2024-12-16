"use client";
import GardensCard from "@/components/shop/gardens/gardensCard";
import LoadingSreen from "@/components/ui/loadingSreen";
import WrapperContainer from "@/components/wrappers/wrapperContainer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger)


export default function Gardens(){

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        const container = containerRef.current
        if(container){
           const sections =  container.querySelectorAll(".section")
           gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top top",
            //   end: () => `+=${container.offsetWidth}`,
              scrub: true,
              pin: true,
              anticipatePin: 1,
            },
          })
        }

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
          };
    },[])

    return (
      <LoadingSreen/>
        // <div className="flex flex-col justify-center w-screen min-h-screen ">
        //     <WrapperContainer>
        //         <div className=" w-screen flex  gap-[10px]" ref={containerRef}>
        //             <GardensCard color={"bg-purple-400"} title={"Yasith Sandesh"}/>
        //             <GardensCard color={"bg-purple-200"} title={"Yasith Sandesh"}/>
        //             <GardensCard color={"bg-purple-100"} title={"Yasith Sandesh"}/>
        //             <GardensCard color={"bg-purple-500"} title={"Yasith Sandesh"}/>
        //         </div>
        //     </WrapperContainer>
        // </div>
    )
}