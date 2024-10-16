import React from "react";
import { PortableText } from "@portabletext/react";
// import Section from "../section";

import { cn } from "@/lib/utils";
import { portableComplex } from "../portable-stucture/portable-complex";

function ContentBody({ module }: { module: any; lightMode?: boolean }) {
  const { body, wide } = module;

  return (
    <section className="lg:py-24 md:py-20 sm:py-16 py-14 px-4 md:px-6 lg:px-0">
      <article
        className={cn(
          "dark:text-foreground prose-headings:text-foreground prose-h1:leading-normal prose-strong:text-foreground prose-blockquote:text-foreground prose-sm prose-blockquote:border-l-4 prose-blockquote:border-primary md:prose-base prose-headings:font-serif font-sans lg:prose-lg prose-stone !max-w-none !w-full col-start-1 col-span-8 mx-auto",
          wide ? "!max-w-[50rem]" : "max-w-prose"
        )}
      >
        <PortableText value={body} components={portableComplex} />
      </article>
    </section>
  );
}

export default ContentBody;
