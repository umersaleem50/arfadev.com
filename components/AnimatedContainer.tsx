"use client";
import { motion, MotionProps } from "motion/react";

interface MotionContainer extends MotionProps {
  className?: string;
}

function MotionContainer(props: MotionContainer) {
  return <motion.div {...props}>{props?.children}</motion.div>;
}

export default MotionContainer;
