"use client";
import React, { useMemo } from "react";
import { motion } from "motion/react";

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

function TableAnimation() {
  const rects = useMemo(
    () => [
      {
        x: 818.551,
        y: 348.669,
        w: 76.5383,
        h: 9.78457,
        fill: "#2b2d42",
      },
      {
        x: 818.551,
        y: 370.427,
        w: 76.5383,
        h: 9.78457,
        fill: "#2b2d42",
      },
      { x: 906.978, y: 370.427, w: 95.6838, h: 9.78457, fill: "#FF7316" },
      {
        x: 906.978,
        y: 349.041,
        w: 68.8438,
        h: 9.78457,
        fill: "#2b2d42",
      },
      {
        x: 1014.23,
        y: 349.041,
        w: 68.8438,
        h: 9.78457,
        fill: "#2b2d42",
      },
      {
        x: 1014.23,
        y: 370.427,
        w: 68.8438,
        h: 9.78457,
        fill: "#2b2d42",
      },
      {
        x: 1014.23,
        y: 390.257,
        w: 68.8438,
        h: 9.78457,
        fill: "#2b2d42",
      },
      {
        x: 1014.23,
        y: 410.086,
        w: 68.8438,
        h: 9.78457,
        fill: "#2b2d42",
      },
      {
        x: 1014.23,
        y: 429.916,
        w: 68.8438,
        h: 9.78457,
        fill: "#2b2d42",
      },
      { x: 906.978, y: 390.257, w: 71.465, h: 9.78457, fill: "#FF7316" },
      { x: 906.978, y: 410.086, w: 71.465, h: 9.78457, fill: "#FF7316" },
      { x: 906.978, y: 429.916, w: 95.6838, h: 9.78457, fill: "#FF7316" },
      {
        x: 818.551,
        y: 390.257,
        w: 76.5383,
        h: 9.78457,
        fill: "#2b2d42",
      },
      {
        x: 818.551,
        y: 410.086,
        w: 76.5383,
        h: 9.78457,
        fill: "#2b2d42",
      },
      {
        x: 818.551,
        y: 429.916,
        w: 76.5383,
        h: 9.78457,
        fill: "#2b2d42",
      },
    ],
    []
  );

  return (
    <motion.g initial="initial" animate="animate" variants={containerVariants}>
      {rects.map((rect, idx) => (
        <motion.rect
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
          x={rect.x}
          y={rect.y}
          width={rect.w}
          height={rect.h}
          fill={rect.fill}
        />
      ))}
      <rect
        x="184.211"
        y="335.18"
        width="174.754"
        height="122.028"
        className={"fill-[#fdf9f76f] dark:fill-[#070505]"}
        stroke="url(#paint15_linear_344_556)"
      />
      <rect
        x="221.693"
        y="73.1089"
        width="137.271"
        height="125.17"
        className={"fill-[#fdf9f76f] dark:fill-[#070505]"}
        stroke="url(#paint16_linear_344_556)"
      />
    </motion.g>
  );
}

export default TableAnimation;
