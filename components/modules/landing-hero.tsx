import React from "react";
import { PortableText } from "@portabletext/react";
import HeroIllustration from "../svgs/hero-illustration";

import { portableComplex } from "../portable-stucture/portable-complex";

function LandingHero({ module }: any) {
  const { content } = module;
  return (
    <div className="w-full h-screen flex flex-col items-center lg:py-16 md:py-14 sm:py-10 py-8 relative overflow-x-hidden">
      <div
        className={
          "dark:text-foreground prose-headings:text-foreground prose-h1:leading-none prose-strong:text-foreground prose-blockquote:text-foreground prose-sm prose-blockquote:border-l-4 prose-blockquote:border-primary sm:prose-sm md:prose-base prose-headings:font-serif font-sans prose-stone !max-w-[40rem] text-center leading-snug"
        }
      >
        <PortableText value={content} components={portableComplex} />
      </div>
      <HeroIllustration
        className={
          "md:!relative absolute bottom-1/3 sm:bottom-5 w-[50rem] sm:w-[60rem] md:right-auto right-1/2 translate-x-1/2 md:translate-x-0 translate-y-1/2 sm:translate-y-0 overflow-x-hidden"
        }
      />
    </div>
  );
}

export default LandingHero;
