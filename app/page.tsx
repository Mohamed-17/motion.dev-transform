import React from "react";
import * as motion from "motion/react-client";
function HomePage() {
  return (
    <div className="space-y-5">
      <motion.div animate={{ x: 100 }} className="box"></motion.div>
      <motion.div animate={{ y: 100 }} className="box"></motion.div>
      <motion.div className="box" animate={{ scaleX: 2 }} />
      <motion.div className="box" animate={{ scaleY: 2 }} />
      <motion.div
        className="box"
        animate={{ skewX: 60, skewY: 10 }}
      ></motion.div>
      <motion.div
        className="box"
        animate={{
          rotate: 60,
        }}
      />
    </div>
  );
}

export default HomePage;
