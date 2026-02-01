"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
import type { ReactNode } from "react";
import { InteractiveHoverButton } from "../InteractiveUIButton";

// Types for our bento grid items
export type BentoItem = {
  id: string;
  type: "feature" | "chat" | "partners";
  title?: string;
  description?: string;
  image?: string;
  className?: string;
  content?: ReactNode;
};

// Props for our base BentoGrid component
interface BentoGridProps {
  items: BentoItem[];
  className?: string;
}

// Props for each bento item
interface BentoItemProps {
  item: BentoItem;
  className?: string;
}

// Base BentoGrid component
export function BentoGrid({ items, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-8  mx-auto",
        className,
      )}
    >
      {items.map((item) => {
        return (
          <div
            key={item.id}
            className={cn(
              "row-span-1",
              item.type === "feature" && "col-span-1 md:col-span-2",
              item.className,
            )}
          >
            <BentoGridItem item={item} />
          </div>
        );
      })}
    </div>
  );
}

// Individual BentoGridItem component
function BentoGridItem({ item, className }: BentoItemProps) {
  const { type, title, description, image, content } = item;

  // Different layouts based on item type
  switch (type) {
    case "feature":
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={cn(
            "relative overflow-hidden rounded-xl bg-accent p-8 h-[400px] flex flex-col md:flex-row",
            className,
          )}
        >
          <div className="flex flex-col justify-center z-10 md:w-1/2 items-start">
            <span className="text-xs uppercase text-accent-foreground font-sans font-medium mb-2">
              Visualise Info
            </span>
            <h2 className="text-3xl md:text-4xl text-accent-foreground font-serif mb-4 text-balance">
              {title}
            </h2>
            <p className="text-sm max-w-md text-accent-foreground font-sans">
              {description}
            </p>
            <InteractiveHoverButton className="mt-4">
              Send Us Email
            </InteractiveHoverButton>
          </div>

          {image && (
            <div className=" md:w-1/2 h-full right-0 top-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0 z-0"
                >
                  <div className="relative w-full h-full top-10 left-10">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt="visualise"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </motion.div>
      );

    case "chat":
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={cn(
            "group relative overflow-hidden rounded-xl bg-muted p-8 h-[400px] flex flex-col ",
            className,
          )}
        >
          <div className="z-10">
            <span className="text-xs uppercase text-muted-foreground font-medium mb-2 flex items-center justify-center p-2 font-sans">
              Customise
            </span>
          </div>

          <div className="flex-1 relative">{content}</div>
        </motion.div>
      );

    case "partners":
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={cn(
            "group relative overflow-hidden rounded-xl bg-muted p-8 h-[400px] flex flex-col ",
            className,
          )}
        >
          <div className="flex-1 relative flex items-center justify-center">
            {content}
          </div>

          <div className="mt-4 z-10">
            <span className="text-xs uppercase text-muted-foreground font-medium font-sans">
              Embed
            </span>
            <h3 className="text-2xl text-muted-foreground mb-2 text-balance font-serif">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground text-balance font-sans">
              {description}
            </p>
          </div>
        </motion.div>
      );

    default:
      return null;
  }
}

// Company logos component for the partners section
export function CompanyLogos() {
  const logos = [
    {
      name: "Spotify",
      url: "https://res.cloudinary.com/harshitproject/image/upload/v1746774292/Spotify.png",
    },
    {
      name: "Notion",
      url: "https://res.cloudinary.com/harshitproject/image/upload/v1746774291/Notion.png",
    },
    {
      name: "Slack",
      url: "https://res.cloudinary.com/harshitproject/image/upload/v1746774292/Slack.png",
    },
    {
      name: "Twitter",
      url: "https://res.cloudinary.com/harshitproject/image/upload/v1746774292/Twitter.png",
    },
    {
      name: "Apple",
      url: "https://res.cloudinary.com/harshitproject/image/upload/v1746774291/Apple.png",
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex gap-8 items-center justify-center"
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {/* First set of logos */}
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="flex-shrink-0 w-16 h-16 bg-neutral-800 rounded-lg flex items-center justify-center p-2"
          >
            <Image
              src={logo.url || "/placeholder.svg"}
              alt={logo.name}
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
          </div>
        ))}

        {/* Duplicate set for seamless looping */}
        {logos.map((logo) => (
          <div
            key={`${logo.name}-dup`}
            className="flex-shrink-0 w-16 h-16 bg-neutral-800 rounded-lg flex items-center justify-center p-2"
          >
            <Image
              src={logo.url || "/placeholder.svg"}
              alt={logo.name}
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// Chat messaging component with iPhone mockup
export function ChatMessaging() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-[280px] h-[500px] bg-neutral-800 rounded-[36px] p-3 border-4 border-neutral-700 overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-neutral-700 rounded-b-xl z-10" />
        <div className="w-full h-full bg-neutral-900 rounded-[28px] p-4 overflow-hidden">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded-full bg-accent mr-3" />
            <div>
              <div className="text-white text-xs font-medium">Assistant</div>
              <div className="text-neutral-400 text-[10px]">Online</div>
            </div>
          </div>

          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-neutral-800 p-2 rounded-lg rounded-tl-none max-w-[80%] text-[10px] text-white"
            >
              How can I help you today?
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#1DCD9F] p-2 rounded-lg rounded-tr-none max-w-[80%] ml-auto text-[10px] text-white"
            >
              I need help with my project
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-neutral-800 p-2 rounded-lg rounded-tl-none max-w-[80%] text-[10px] text-white"
            >
              I&apos;d be happy to help! What kind of project are you working
              on?
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="bg-[#1DCD9F] p-2 rounded-lg rounded-tr-none max-w-[80%] ml-auto text-[10px] text-white"
            >
              I&apos;m building a component library with Next.js and Tailwind
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
