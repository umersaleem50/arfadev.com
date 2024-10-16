import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const purifyString = (str: string): string => {
  // if (typeof str !== "string") return str;
  // Use regular expressions to remove unwanted characters
  return str
    ?.trim() // Remove leading and trailing spaces
    ?.replace(/[\u200B-\u200D\uFEFF]/g, "") // Remove zero-width spaces (ZWSP, ZWNJ, ZWJ, FEFF)
    ?.replace(/[^\x20-\x7E]/g, ""); // Remove non-printable ASCII characters (except common spaces)
};

export const framerMotionDraw = ({
  duration = 1.5,
}: {
  duration?: number;
}) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: duration, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
});

export const joinSlugs = (slugArr: any) => {
  const joinedStr = slugArr.join("/");
  return joinedStr;
};
