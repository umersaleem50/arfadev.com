import { urlFor } from "@/sanity/lib/image";
import dynamic from "next/dynamic";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { LinkSimple } from "@phosphor-icons/react/dist/ssr";

import { buttonVariants } from "../ui/button";
import CodeHighlighter from "./CodeHighlighter";

const CustomImage = dynamic(() => import("../SanityImage"));
// const TestimonialsPortable = dynamic(() =>
//   import("../modules/testimonial").then((el) => el.TestimonialsPortable)
// );
const DataTable = dynamic(() => import("../data-table"));
const PortableCTA = dynamic(() => import("../portable-cta"));

export const portableComplex: any = {
  block: {
    strong: ({ children }: any) => <strong>{children}</strong>,
    normal: ({ children }: any) => <p>{children}</p>,
    h1: ({ children }: any) => <h1>{children}</h1>,
    h2: ({ children }: any) => <h2>{children}</h2>,
    h3: ({ children }: any) => <h3>{children}</h3>,
    h4: ({ children }: any) => <h4>{children}</h4>,
    h5: ({ children }: any) => <h5>{children}</h5>,
    h6: ({ children }: any) => <h6>{children}</h6>,
    blockquote: ({ children }: { children: any }) => (
      <blockquote>{children}</blockquote>
    ),
    figcaption: ({ children }: any) => (
      <figcaption className="text-sm text-muted-foreground text-center mt-2">
        {children}
      </figcaption>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul>{children}</ul>,
    number: ({ children }: any) => <ol>{children}</ol>,
  },

  marks: {
    // Ex. 1: custom renderer for the em / italics decorator

    em: ({ children }: any) => <em>{children}</em>,
    code: ({ children }: any) => {
      return (
        <code className="bg-background px-2 py-4 border-border">
          {children}
        </code>
      );
    },
    underline: ({ children }: any) => <u>{children}</u>,
    mark: ({ children }: any) => <mark>{children}</mark>,
    highlight: ({ children }: any) => (
      <mark className="bg-accent dark:bg-primary text-accent-foreground dark:text-primary-foreground">
        {children}
      </mark>
    ),

    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }: any) => {
      let href = "/invalid-url";
      if (value.linkType === "external") {
        href = value?.url;
      }
      if (value.linkType === "internal") {
        href = value?.page ? `/${value?.page?.slug}` : "/invalid-url";
      }
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;

      if (value?.isButton) {
        return (
          <Link
            href={href}
            target={target}
            className={buttonVariants({
              variant: value?.styles?.style || "default",
              size: value?.styles?.isLarge ? "lg" : "default",
              className: cn(
                value?.styles?.isBlock && "w-full",
                // "py-4 my-3 md:mr-4 sm:mr-3 mr-2"
              ),
            })}
          >
            {children}
          </Link>
        );
      } else {
        return (
          <Link
            href={href}
            target="_blank"
            className="!text-accent dark:!text-primary underline underline-offset-2"
            // className={cn("text-primary", buttonVariants({ variant: "link" }))}
          >
            {children}
          </Link>
        );
      }
    },
  },

  types: {
    image: ({ value }: any) => {
      if (!value) return null;
      const imageOptions: any = {
        alt: value.alt || "Please enter the alt.",
      };
      if (!value.height || !value.width) {
        imageOptions["fill"] = true;
      } else {
        imageOptions["width"] = value.width;
        imageOptions["height"] = value.height;
      }

      return (
        <figure>
          <CustomImage
            src={urlFor(value).url()}
            imageOBJ={value}
            {...imageOptions}
          />
          <figcaption className="flex justify-between p-2 bg-accent dark:bg-accent text-accent-foreground sm:text-base text-sm">
            {value?.description}{" "}
            {value?.refLink && (
              <Link
                href={value?.refLink?.url}
                target="_blank"
                className="flex items-center gap-1 text-accent-foreground "
              >
                {value?.refLink?.title} <LinkSimple />
              </Link>
            )}
          </figcaption>
        </figure>
      );
    },
    code: ({ value }: any) => {
      return <CodeHighlighter language={value.language} code={value.code} />;
    },
    table: ({ value }: any) => {
      const { rows = [] } = value;
      const [firstRow, ...dataRows] = rows;

      return <DataTable firstRow={firstRow} dataRow={dataRows} />;
    },
    // testimonial: ({ value }: any) => {
    //   return <TestimonialsPortable module={value} />;
    // },
    cta: ({ value }: any) => {
      return value?.cta && <PortableCTA module={value.cta} />;
    },
  },
};
