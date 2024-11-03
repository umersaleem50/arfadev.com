import React from "react";
import { PortableText } from "@portabletext/react";
// import Section from "../section";

import { cn, purifyString } from "@/lib/utils";
import { portableComplex } from "../portable-stucture/portable-complex";

const WrapperElement = ({
  element,
  wide,
  body,
}: {
  element: string;
  wide: boolean;
  body: any;
}) => {
  switch (purifyString(element)) {
    case "section":
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

    case "div":
      return (
        <div
          className={cn(
            "dark:text-foreground prose-headings:text-foreground prose-h1:leading-normal prose-strong:text-foreground prose-blockquote:text-foreground prose-sm prose-blockquote:border-l-4 prose-blockquote:border-primary md:prose-base prose-headings:font-serif font-sans lg:prose-lg prose-stone !max-w-none !w-full col-start-1 col-span-8 mx-auto",
            wide ? "!max-w-[50rem]" : "max-w-prose"
          )}
        >
          <PortableText value={body} components={portableComplex} />
        </div>
      );

    default:
      return null;
  }
};

function ContentBody({ module }: { module: any; lightMode?: boolean }) {
  const { body, wide, wrapper = "section" } = module;

  return (
    // <section className="lg:py-24 md:py-20 sm:py-16 py-14 px-4 md:px-6 lg:px-0">
    //   <article
    //     className={cn(
    //       "dark:text-foreground prose-headings:text-foreground prose-h1:leading-normal prose-strong:text-foreground prose-blockquote:text-foreground prose-sm prose-blockquote:border-l-4 prose-blockquote:border-primary md:prose-base prose-headings:font-serif font-sans lg:prose-lg prose-stone !max-w-none !w-full col-start-1 col-span-8 mx-auto",
    //       wide ? "!max-w-[50rem]" : "max-w-prose"
    //     )}
    //   >
    //     <PortableText value={body} components={portableComplex} />
    //   </article>
    // </section>
    <WrapperElement element={wrapper} wide={wide} body={body} />
  );
}

export default ContentBody;
