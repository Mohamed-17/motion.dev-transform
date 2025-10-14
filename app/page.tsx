import React from "react";
import * as motion from "motion/react-client";
function HomePage() {
  return (
    <div className="space-y-5">
      <motion.div
        animate={{ x: 100, y: 100 }}
        transition={{ duration: 1, ease: "easeIn", delay: 2 }}
        className="box"
      ></motion.div>
    </div>
  );
}

export default HomePage;
