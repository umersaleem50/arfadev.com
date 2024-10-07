import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import CustomImage from "../custom-image";
import { urlFor } from "@/sanity/lib/image";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { LinkSimple } from "@phosphor-icons/react/dist/ssr";

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
        <code className="bg-white px-2 py-4 border-border">{children}</code>
      );
    },
    underline: ({ children }: any) => <u>{children}</u>,
    mark: ({ children }: any) => <mark>{children}</mark>,
    highlight: ({ children }: any) => (
      <mark className="bg-primary text-primary-foreground">{children}</mark>
    ),

    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }: any) => {
      let href = "/not-found";
      if (value.linkType === "external") {
        href = value.url;
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
              className: cn(value?.styles?.isBlock && "w-full", "py-2"),
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
      let imageOptions: any = {
        alt: value.alt || "Please enter the alt.",
      };
      if (!value.height || !value.width) {
        imageOptions["fill"] = true;
      } else {
        imageOptions["width"] = value.width;
        imageOptions["height"] = value.height;
      }

      console.log(imageOptions);

      return (
        <figure>
          <CustomImage
            src={urlFor(value).url()}
            imageOBJ={value}
            {...imageOptions}
          />
          <figcaption className="flex justify-between p-2 bg-accent dark:bg-accent text-accent-foreground">
            {value?.description}{" "}
            {value?.refLink && (
              <Link
                href={value?.refLink?.url}
                target="_blank"
                className="flex items-center gap-1 dark:text-primary"
              >
                {value?.refLink?.title} <LinkSimple />
              </Link>
            )}
          </figcaption>
        </figure>
      );
    },
    code: ({ value }: any) => {
      return (
        <SyntaxHighlighter language={value.language} style={atomOneLight}>
          {value.code}
        </SyntaxHighlighter>
      );
    },
  },
};
