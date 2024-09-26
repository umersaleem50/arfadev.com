import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export interface IServiceCard {
  index: number;
  className?: string;
  SVGComponent?: any;
}

function ServiceCard({ index = 0, className, SVGComponent }: IServiceCard) {
  return (
    <figure
      className={cn(
        index % 2 === 0 ? "bg-secondary" : "bg-muted-foreground",
        "h-auto flex flex-col p-6 items-start space-y-4",
        className
      )}
    >
      {SVGComponent && (
        <SVGComponent className="mt-32 mb-4 h-[10rem] overflow-hidden" />
      )}
      <h3 className="text-2xl font-serif text-brand-black">1. Web Designing</h3>
      <p className="text-sm font-sans text-brand-black">
        We Provide elegant web design service to law firm to increase your user
        experience.
      </p>
      <Link className={buttonVariants({ variant: "link" })} href={"/"}>
        Learn More
      </Link>
    </figure>
  );
}

export default ServiceCard;
