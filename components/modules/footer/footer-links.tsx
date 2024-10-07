import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export interface IFooterLinks {
  title: string;
  links: { url: string; title: string }[];
}
function FooterLinks({ title, links = [] }: IFooterLinks) {
  return (
    <div className="py-4">
      <h3 className="text-2xl font-serif text-primary mb-4">{title}</h3>
      <div className="flex flex-col items-start space-y-2">
        {links.map(({ url = "/", title, page }: any, i: number) => {
          const href = page ? page?.slug?.current : url;
          return (
            <Link
              href={href}
              className={buttonVariants({
                variant: "link",
                className: "text-secondary !px-0",
              })}
            >
              {title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default FooterLinks;
