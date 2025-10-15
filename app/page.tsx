"use client";
import React from "react";
import { motion, useSpring } from "motion/react";
function HomePage() {
  const motionScale = useSpring(1);
  const onChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    motionScale.set(parseFloat(e.target.value));
  };
  return (
    <div>
      <motion.div className="box" style={{ scale: motionScale }} />

      <div className="mt-10">
        <input
          type="range"
          onChange={onChangeEvent}
          step={1}
          min={1}
          max={6}
          defaultValue={1}
        />
      </div>
    </div>
  );
}

export default HomePage;
