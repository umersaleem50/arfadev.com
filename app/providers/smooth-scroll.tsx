"use client";
import ReactLenis from "lenis/react";
import React from "react";

function SmoothScrollProvider({ children }: { children: any }) {
  return <ReactLenis root>{children}</ReactLenis>;
}

export default SmoothScrollProvider;
