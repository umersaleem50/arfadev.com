import { cx } from "class-variance-authority";
import { urlFor } from "@/sanity/lib/image";
import ContentBody from "./content-body";
import CustomImage from "../custom-image";
import { cn, purifyString } from "@/lib/utils";
import { FormComponent } from "../form";

const GridBlock = ({ block }: any) => {
  const type = block._type;

  switch (type) {
    case "customImage":
      const loading =
        purifyString(block?.loading) === "eager" ? "eager" : "lazy";

      if (!block?.asset) return;

      return (
        <div className={`w-full relative`}>
          <CustomImage
            alt={block?.alt}
            src={urlFor(block).url()}
            imageOBJ={block}
            height={block?.height}
            width={block?.width}
            objectFit={block?.objectFit}
            className="object-cover"
            priority={(block?.priority && loading === "eager") || false}
            loading={loading}
          />
        </div>
      );
    case "bodyContent":
      return <ContentBody module={block} />;
    case "form":
      return <FormComponent module={block} />;

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

function GridModule({ module }: any) {
  const { size, columns, deviceScreen = false } = module;

  return (
    <section className={cn("w-full", deviceScreen ? "h-screen" : "h-auto")}>
      {/* <div className="w-full"> */}
      <div
        className={`grid grid-cols-${size} lg:gap-x-16 md:gap-x-10 sm:gap-6 xs:gap-4`}
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
      {/* </div> */}
    </section>
  );
}

export default GridModule;
