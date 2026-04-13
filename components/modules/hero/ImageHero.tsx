import { PortableText } from "@portabletext/react";

import SanityImage, { SanityImageProps } from "@/components/SanityImage";
import { portableComplex } from "@/components/portable-stucture/portable-complex";
import { cn } from "@/lib/utils";
import { TypedObject } from "sanity";

interface ImageHeroProps {
  coverImage: SanityImageProps;
  isFullImage: boolean;
  content: TypedObject | TypedObject[];
  darkText?: boolean;
}

function ImageHero({ module }: { module: ImageHeroProps }) {
  const { coverImage, content } = module;

  return (
    <div className="w-full h-screen relative">
      <div
        className={cn(
          "w-full relative overflow-hidden h-screen",
          //   isFullImage ? "h-screen" : "h-[60vh] ",
        )}
      >
        {coverImage && (
          <SanityImage
            image={coverImage}
            fill
            objectFit={coverImage.objectFit}
            className="w-full bg-fixed fixed top-0 blur-[2px] scale-105"
            priority
          />
        )}
      </div>
      <div className="absolute bottom-[50%] left-[50%] -translate-x-[50%] translate-y-[50%] z-10 w-full px-4 sm:px-0 sm:w-3/4 md:max-w-[45rem] prose prose-base md:prose-xl !text-white font-sans prose-headings:font-serif prose-headings:font-light prose-headings:text-white">
        <PortableText value={content} components={portableComplex} />
      </div>
      <div
        className={cn(
          "w-full absolute top-0 bg-gradient-to-r from-primary to-accent opacity-20 pointer-events-none h-screen",
          //   isFullImage ? "h-full" : "h-[60vh]",
        )}
      ></div>
    </div>
  );
}

export default ImageHero;
