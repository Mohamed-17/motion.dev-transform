"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
function HomePage() {
  const [isVisible, setIsvisible] = useState(false);
  const parentVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <div>
      <motion.div
        className="flex space-x-3"
        variants={parentVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className="box"
            variants={childVariants}
          ></motion.div>
        ))}
      </motion.div>

      <div className="mt-20 flex justify-center">
        <button
          onClick={() => setIsvisible((prev) => !prev)}
          className="bg-white text-black font-bold rounded px-5 py-2"
        >
          {isVisible ? "Hide Element" : "Show Element"}
        </button>
      </div>
    </div>
  );
}

export default HomePage;
