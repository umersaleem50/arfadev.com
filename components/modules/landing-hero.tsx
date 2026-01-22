import { PortableText } from "@portabletext/react";

import { cn } from "@/lib/utils";
import { DotPattern } from "../dot-grid";
import { portableComplex } from "../portable-stucture/portable-complex";
import { Safari } from "../Safari";

function LandingHero({ module }: any) {
  const { content } = module;
  return (
    <div className="w-full h-screen lg:h-[50vw] xl:h-[40vw] flex flex-col items-center lg:py-16 md:py-14 sm:py-10 py-8 relative ">
      <div
        className={
          "dark:text-foreground prose-headings:text-foreground prose-h1:leading-none prose-strong:text-foreground prose-blockquote:text-foreground prose-sm prose-blockquote:border-l-4 prose-blockquote:border-primary sm:prose-sm md:prose-base prose-headings:font-serif font-sans prose-stone !max-w-[40rem] text-center leading-snug"
        }
      >
        <PortableText value={content} components={portableComplex} />
      </div>

      <Safari
        imageSrc="/assets/dashboard.jpg"
        className="h-[900px] w-[900px] -z-[10]"
      />

      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] -z-[20]",
        )}
      />
    </div>
  );
}

export default LandingHero;
