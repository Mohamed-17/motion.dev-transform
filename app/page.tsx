import React from "react";
import * as motion from "motion/react-client";
function HomePage() {
  return (
    <div className="space-x-3 flex">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="w-8 h-8 bg-teal-400 rounded-full"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
            repeatDelay: index * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default HomePage;
