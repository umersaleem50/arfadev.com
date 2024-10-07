import React from "react";
import { PortableText } from "@portabletext/react";
// import Section from "../section";

import { cn } from "@/lib/utils";
import { portableSimple } from "../portable-stucture/portable-simple";
import { portableComplexDarkText } from "../portable-stucture/portable-complex-dark";
import { portableComplex } from "../portable-stucture/portable-complex";

function ContentBody({ module }: { module: any; lightMode?: boolean }) {
  const { body, wide } = module;

  return (
    <section>
      <article
        className={cn(
          "w-full prose prose-headings:font-serif lg:prose-md md:prose-lg prose-p:font-sans dark:text-foreground prose-headings:dark:text-primary"
          // wide ? "max-w-article-wide" : "max-w-article "
        )}
      >
        <PortableText value={body} components={portableComplex} />
      </article>
    </section>
  );
}

export default ContentBody;
