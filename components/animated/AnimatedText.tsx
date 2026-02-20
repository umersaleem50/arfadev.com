"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "motion/react";

function AnimatedText({ children, Wrapper, className }: any) {
  return (
    <div className="relative inline-block overflow-hidden h-auto">
      {/* Text Layer */}
      <Wrapper
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }} // waits until strip moves out
        viewport={{ once: true }}
        className={className}
      >
        {children}
      </Wrapper>

      {/* Orange Strip */}
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: ["-100%", "0%", "100%"] }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-accent z-20"
      />
    </div>
  );
}

export default AnimatedText;
