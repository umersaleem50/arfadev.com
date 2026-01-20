import { cn } from "@/lib/utils";
import { PortableText } from "@portabletext/react";
import CustomImage from "../custom-image";

import { portableComplex } from "../portable-stucture/portable-complex";

function Hero({ module }: any) {
  const { coverImage, isFullImage, content } = module;

  return (
    <div className="w-full h-auto relative">
      <div
        className={cn(
          "w-full relative overflow-hidden",
          isFullImage ? "h-screen" : "h-[60vh] ",
        )}
      >
        {coverImage?.asset && (
          <CustomImage
            imageOBJ={coverImage}
            fill
            objectFit={coverImage.objectFit}
            className="w-full bg-fixed fixed top-0 blur-[2px] scale-105"
            priority
            alt={coverImage?.alt}
          />
        )}
      </div>
      <div className="absolute bottom-[50%] left-[50%] -translate-x-[50%] translate-y-[50%] z-10 w-full px-4 sm:px-0 sm:w-3/4 md:max-w-[50rem] lg:prose-lg prose-sm md:prose-base !text-white font-sans prose-headings:font-serif prose-headings:text-white">
        <PortableText value={content} components={portableComplex} />
      </div>
      <div
        className={cn(
          "w-full absolute top-0 bg-black/80 pointer-events-none",
          isFullImage ? "h-full" : "h-[60vh]",
        )}
      ></div>
    </div>
  );
}

export default Hero;
