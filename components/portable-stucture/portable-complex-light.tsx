import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import CustomImage from "../SanityImage";
import { buttonVariants } from "../ui/button";

export const portableComplexLightText: any = {
  block: {
    strong: ({ children }: any) => (
      <strong className="font-medium lg:font-semibold  md:e/70  lg:my-8">
        {children}
      </strong>
    ),
    normal: ({ children }: any) => (
      <p className="text-sm md:text-base lg:text-lg text-background font-sans leading-normal lg:my-8">
        {children}
      </p>
    ),
    h1: ({ children }: any) => (
      <h1 className="font-serif !leading-snug text-3xl md:text-4xl lg:text-6xl font-semibold text-background my-2 md:my-4 lg:my-8 ">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="font-serif text-3xl lg:text-5xl font-semibold text-background md:my-4 lg:my-8 ">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="font-serif text-2xl lg:text-4xl font-semibold text-background md:my-4 lg:my-8 ">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="font-serif text-xl lg:text-3xl font-semibold text-background md:my-4 lg:my-8 ">
        {children}
      </h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="font-serif text-lg lg:text-2xl font-semibold text-background md:my-4 lg:my-8">
        {children}
      </h5>
    ),
    h6: ({ children }: any) => (
      <h6 className="font-serif text-base lg:text-xl font-semibold text-background md:my-4 lg:my-8 ">
        {children}
      </h6>
    ),
    blockquote: ({ children }: { children: any }) => (
      <blockquote className="border-l-arfa-light-purple border-l-4 pl-4 py-2 text-base lg:text-lg leading-loose text-arfa-purple">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="mt-xl text-lg list-disc !font-sans ml-4 text-white/70">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg text-lg list-decimal !font-sans ml-4 text-white/70">
        {children}
      </ol>
    ),
  },

  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({ children }: any) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),
    code: (value: any) => {
      return <p>{value.value}</p>;
    },
    underline: ({ children }: any) => (
      <u className="underline underline-offset-2 text-primary/70">{children}</u>
    ),
    mark: ({ children }: any) => (
      <mark className="bg-primary-foreground text-secondary-foreground/70">
        {children}
      </mark>
    ),

    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }: any) => {
      // const target = (value?.href || "").startsWith("http")
      //   ? "_blank"
      //   : undefined;

      // const pageLink =
      //   value.linkType === "internal" && `/${value?.page?.slug?.current}`;
      let href = "/not-found";
      if (value.linkType === "external") {
        href = value.url;
      }
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;

      switch (value?.isButton) {
        case true:
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

        case false:
          <Link
            href={href}
            target={target}
            className={buttonVariants({ variant: "link" })}
          >
            {children}
          </Link>;
        default:
          break;
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
      return (
        <div className="w-full h-full relative">
          <CustomImage
            src={urlFor(value).url()}
            imageOBJ={value}
            {...imageOptions}
          />
        </div>
      );
    },
  },
};
