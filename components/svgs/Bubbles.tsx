"use client";
import React from "react";
import { motion } from "motion/react";

const positions = [
  [523.031, 132.175],
  [523.031, 141.123],
  [530.473, 135.347],
  [534.227, 117.019],
  [510.306, 111.282],
  [534.227, 125.966],
  [510.306, 120.23],
  [541.669, 120.19],
  [517.748, 114.453],
];

// Random size generator for circle radius
const getRandomSize = () => +(Math.random() * (6 - 2) + 2).toFixed(2); // 2–6 radius

function Bubbles() {
  return (
    <motion.g>
      {positions.map(([cx, cy], idx) => {
        const r = getRandomSize();
        const delay = Math.random() * 2;

        return (
          <motion.circle
            key={idx}
            cx={cx}
            cy={cy * 1.3}
            r={r}
            fill="#E3742A"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0.8, 0.5, 0], y: -30 }}
            transition={{
              duration: 3,
              delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        );
      })}
    </motion.g>
  );
}

export default Bubbles;
