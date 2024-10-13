import React from "react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

function SectionFooter({
  description,
  btnText,
  urlType,
  navPage,
  navLink,
  slugPage,
}: {
  description: string;
  btnText?: string;
  urlType?: string;
  navPage?: { slug: { current: string } };
  navLink?: string;
  slugPage?: string;
}) {
  let href;
  switch (urlType) {
    case "internal":
      href = navPage?.slug?.current;
      break;
    case "external":
      href = navLink;
      break;
    case "slug":
      href = slugPage;
      break;
  }

  return (
    <div className="flex justify-between items-center container mx-auto lg:py-12 md:py-8 border-t max-w-[85rem] lg:mt-24 md:mt-16">
      <p className="text-sm leading-normal font-sans max-w-md text-muted-foreground">
        {description}
      </p>

      <Link
        className={buttonVariants({ variant: "outline", size: "lg" })}
        href={href || "/not-found"}
      >
        {btnText}
      </Link>
    </div>
  );
}

export default SectionFooter;
