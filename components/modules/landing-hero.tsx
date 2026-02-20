"use client";

import { motion } from "motion/react";
import AnimatedText from "../animated/AnimatedText";
import BtnCTA from "../BtnCTA";

export interface LandingHeroProps {
  cta: string;
}

const defaultItems = [
  {
    image:
      "https://cdn.dribbble.com/userupload/17730954/file/original-1ca571d72aed46b341defcb0bf9a18e1.png?resize=1024x768&vertical=center",
    text: "Doneze",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/8817245/file/original-fe6d08b5e2b3f7fb2fad97cfbe501ac3.png?resize=1024x768&vertical=center",
    text: "Bolt",
  },
  {
    image: "/assets/coach-pulse.jpg",
    text: "Coach Pulse",
  },
  {
    image: "/assets/cayus-ai.jpg",
    text: "Cayus AI",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/46084065/file/cd785c8cc61b8647d7c4a2ef5fb5150d.jpg?resize=1024x768&vertical=center",
    text: "JD",
  },
  {
    image: "/assets/coach-pulse-dark.jpg",
    text: "Coach Pulse",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/38640245/file/original-15aac0b678e3534477fa01565d81f455.png?resize=1024x768&vertical=center",
    text: "Toks.",
  },

  ,
];

function LandingHero() {
  return (
    <section className="z-10 h-screen flex items-center justify-center">
      <div className="flex items-center md:flex-col flex-row gap-4 w-full mx-auto">
        <div className="mx-auto max-w-4xl px-4 md:px-6 text-left mt-8 flex flex-col items-center gap-y-12 justify-center self-center">
          <AnimatedText
            Wrapper={motion.h1}
            className={
              "text-3xl sm:text-5xl md:text-7xl font-serif text-center leading-tight capitalize font-light text-muted-foreground"
            }
          >
            Turn every visitor into <br />
            <u className="text-accent dark:text-primary">Paying customer!</u>
          </AnimatedText>
          <div className="flex flex-col gap-y-8 items-center">
            <AnimatedText
              Wrapper={motion.p}
              className="w-full max-w-md text-xs sm:text-base font-sans whitespace-normal leading-relaxed! text-center text-muted-foreground"
            >
              We help tech startups with better landing page or saas onboarding
              that improve conversion, rentention, and activiation rate.
            </AnimatedText>
            <BtnCTA>Contact For Help</BtnCTA>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingHero;
