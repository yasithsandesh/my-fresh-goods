"use client";
import { motion } from "framer-motion";

export default function LoadingSreen() {
  return (
    <div className=" flex w-full flex-row justify-center items-center min-h-screen">
      <motion.div
        className=" w-[100px] h-[100px] rounded-full bg-green-400 flex justify-center  items-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <motion.h2     initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }} className=" text-[50px] font-medium cursor-pointer  duration-100">
          🍓
        </motion.h2>
      </motion.div>
    </div>
  );
}
