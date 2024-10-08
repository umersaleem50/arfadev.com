import React from "react";
import { PortableText } from "@portabletext/react";
// import Section from "../section";

import { cn } from "@/lib/utils";
import { portableComplex } from "../portable-stucture/portable-complex";

function ContentBody({ module }: { module: any; lightMode?: boolean }) {
  const { body, wide } = module;

  return (
    <section className="py-24">
      <article
        className={cn(
          "dark:text-foreground prose-headings:text-foreground prose-strong:text-foreground prose-blockquote:text-foreground prose prose-blockquote:border-l-4 prose-blockquote:border-primary md:prose-base prose-headings:font-serif font-sans lg:prose-lg prose-stone !max-w-none !w-full col-start-1 col-span-8 mx-auto",
          wide ? "!max-w-[50rem]" : "max-w-prose"
        )}
      >
        <PortableText value={body} components={portableComplex} />
      </article>
    </section>
  );
}

export default ContentBody;
