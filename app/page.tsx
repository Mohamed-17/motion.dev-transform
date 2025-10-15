import React from "react";
import * as motion from "motion/react-client";
function HomePage() {
  return (
    <div className=" text-white w-full h-[200vh]">
      <div className="flex w-full justify-center mt-[150rem] items-center">
        <div className="flex flex-col gap-10 ">
          {Array.from({ length: 6 }, (_, index) => index + 1).map((item) => (
            <motion.div
              key={item}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="text-white bg-blue-500 w-30 flex justify-center items-center font-bold text-xl h-30 rounded"
            >
              item {item}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
