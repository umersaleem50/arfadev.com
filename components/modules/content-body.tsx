import { PortableText } from "@portabletext/react";
// import Section from "../section";

import { cn, purifyString } from "@/lib/utils";
import ArticleWrapper from "../portable-stucture/ArticleWrapper";
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
    default:
      return (
        <section
          className={cn(
            "lg:py-24 md:py-20 sm:py-16 py-14 px-4 md:px-6 lg:px-0 mx-auto",
            wide ? "!max-w-[50rem]" : "max-w-prose",
          )}
        >
          <ArticleWrapper>
            <PortableText value={body} components={portableComplex} />
          </ArticleWrapper>
        </section>
      );
  }
};

function ContentBody({ module }: { module: any; lightMode?: boolean }) {
  const { body, wide, wrapper = "section" } = module;

  return <WrapperElement element={wrapper} wide={wide} body={body} />;
}

export default ContentBody;
