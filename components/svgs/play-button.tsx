"use client";
import React from "react";
import { Button } from "../ui/button";

function PlayButton() {
  return (
    <Button
      onClick={() => alert("wokring")}
      className="z-10 cursor-pointer hover:cursor-pointer group bg-none group "
      aria-label="Play Testimonial"
      variant={"ghost"}
    >
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="72"
          height="72"
          rx="36"
          fill="#D9B59F"
          className="dark:fill-white group-hover:!fill-primary  transition-all duration-200 fill-black"
        />
        <path
          d="M53 35.5L26.75 50.6554L26.75 20.3446L53 35.5Z"
          fill="#031625"
          className="fill-primary group-hover:fill-white transition-all duration-200 dark:fill-primary"
        />
      </svg>
    </Button>
  );
}

export default PlayButton;
