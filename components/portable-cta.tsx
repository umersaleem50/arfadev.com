import { cx } from "class-variance-authority";
import { urlFor } from "@/sanity/lib/image";

import { cn, purifyString } from "@/lib/utils";
import { PortableText } from "@portabletext/react";
import CustomImage from "./custom-image";
import { portableComplex } from "./portable-stucture/portable-complex";

const GridBlock = ({ block }: any) => {
  const type = block._type;

  switch (type) {
    case "customImage":
      if (!block?.asset) return;
      return (
        <div className={`w-full h-auto relative`}>
          <CustomImage
            alt={block?.assets?.alt || "Please enter alt"}
            src={urlFor(block?.asset).url()}
            imageOBJ={block.asset}
            height={block?.height}
            width={block?.width}
            objectFit={block?.objectFit}
          />
        </div>
      );
    case "bodyContent":
      return (
        <div className="max-w-[400px] sm:max-w-0 lg:prose-lg prose-base dark:text-muted-foreground lg:px-12 md:px-8 sm:px-6 px-4 py-6 prose-a:text-white dark:prose-a:text-white">
          <PortableText value={block?.body} components={portableComplex} />
        </div>
      );
    default:
      return null;
  }
};

const getGridSize = (
  breakpoint: any,
  size: any,
  justify = "auto",
  align = "auto",
  start = "auto"
) => {
  const hasBreakpoint = breakpoint && breakpoint.trim();
  const colSpan = hasBreakpoint
    ? `${breakpoint}:col-span-${size}`
    : `col-span-${size}`;
  const colStart = hasBreakpoint
    ? `${breakpoint}:col-start-${start}`
    : `col-start-${start}`;

  const colJustify = hasBreakpoint ? `${breakpoint}:${justify}` : justify;
  const colAlign = hasBreakpoint ? `${breakpoint}:${align}` : align;

  const classes = [
    colSpan,
    start && colStart,
    justify && colJustify,
    align && colAlign,
  ].map((el) => purifyString(el));

  return cx(classes);
};

function PortableCTA({ module }: any) {
  const { size, columns } = module;

  return (
    <div
      className={`w-full grid grid-cols-${size} bg-muted overflow-hidden my-12 border border-border`}
    >
      {columns.map((col: any, key: number) => {
        const { sizes, blocks } = col;

        const className = cx(
          sizes.map((size: any) => {
            return getGridSize(
              size.breakpoint,
              size.width,
              size.justify,
              size.align,
              size.start
            );
          })
        ).toLocaleLowerCase();

        return (
          <div key={key} className={className}>
            {blocks.map((block: any, key: number) => (
              <GridBlock key={key} block={block} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default PortableCTA;
