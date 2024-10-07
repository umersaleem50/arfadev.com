import { urlFor } from "@/sanity/lib/image";

import { PortableText } from "@portabletext/react";
import CustomImage from "../custom-image";
import { cn } from "@/lib/utils";
import { portableComplexLightText } from "../portable-stucture/portable-complex-light";
import { portableComplexDarkText } from "../portable-stucture/portable-complex-dark";
import { portableComplex } from "../portable-stucture/portable-complex";

function Hero({ module }: any) {
  const { coverImage, isFullImage, content, darkText = false } = module;

  return (
    <div className="w-full h-auto relative">
      <div
        className={cn(
          "w-full relative overflow-hidden",
          isFullImage ? "h-[50vh] md:h-screen" : "h-[50vh] "
        )}
      >
        {coverImage?.asset && (
          <CustomImage
            imageOBJ={coverImage.asset}
            fill
            objectFit={coverImage.objectFit}
            className="w-full bg-fixed fixed top-0 blur-[2px] scale-105"
            src={urlFor(coverImage.asset).url()}
            alt="Blog Image"
            priority
          />
        )}
      </div>
      <div className="absolute bottom-[50%] left-[50%] -translate-x-[50%] translate-y-[50%] z-10 w-full px-4 sm:px-0 sm:w-3/4 md:max-w-[50rem] prose prose-xl dark:text-foreground">
        <PortableText value={content} components={portableComplex} />
      </div>
      <div
        className={cn(
          "w-full absolute top-0 bg-secondary-foreground/40 pointer-events-none",
          isFullImage ? "h-[50vh] md:h-screen" : "h-[50vh]"
        )}
      ></div>
    </div>
  );
}

export default Hero;
