import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const purifyString = (str: string): string => {
  // Use regular expressions to remove unwanted characters
  return str
    .trim() // Remove leading and trailing spaces
    .replace(/[\u200B-\u200D\uFEFF]/g, "") // Remove zero-width spaces (ZWSP, ZWNJ, ZWJ, FEFF)
    .replace(/[^\x20-\x7E]/g, ""); // Remove non-printable ASCII characters (except common spaces)
};

export const framerMotionDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};
