import React from "react";
import * as motion from "motion/react-client";
function HomePage() {
  const boxVariants = {
    init: { opacity: 1, scale: 1 },
    hide: { opacity: 0.5, scale: 0.8 },
    click: { opacity: 0, scale: 0 },
  };
  return (
    <div className="space-x-3 flex">
      <motion.div
        variants={boxVariants}
        className="w-80 h-80 bg-blue-400 rounded-lg"
        initial={"init"}
        whileHover={"hide"}
      ></motion.div>
    </div>
  );
}

export default HomePage;
