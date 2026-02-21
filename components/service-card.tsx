import Link from "next/link";

import { ArrowUpRight } from "lucide-react";
import CustomImage from "./SanityImage";
import { Button } from "./ui/button";

import { cn } from "@/lib/utils";

export interface IServiceCard {
  index: number;
  className?: string;
  icon: any;
  title: string;
  subtitle: string;
  page: { slug: any };
}

function ServiceCard({
  index = 0,
  className,
  icon,
  title,
  subtitle,
  page,
}: IServiceCard) {
  const evenIndex = index % 2 === 0;

  return (
    <figure
      className={cn(
        evenIndex ? "bg-muted" : "bg-background",
        "h-auto flex flex-col p-6 items-start space-y-4 border border-border",
        className,
      )}
    >
      {/* {SVGComponent && (
        <SVGComponent className="mt-32 mb-4 h-[10rem] overflow-hidden" />
      )} */}
      {icon && (
        <div className="lg:mt-32 md:mt-28 sm:mt-20 mt-16 mb-4 h-[6rem] w-[6rem] overflow-hidden relative">
          <CustomImage
            imageOBJ={icon}
            fill
            alt="SVG"
            className="object-contain"
          />
        </div>
      )}
      <h3 className="text-2xl font-serif text-foreground dark:text-muted-foreground">
        {title}
      </h3>
      <p className="text-sm font-sans text-foreground dark:text-muted-foreground">
        {subtitle}
      </p>
      {page?.slug && (
        <Button variant={"outline"} className="capitalize" asChild>
          <Link href={page?.slug?.current || "/"}>
            More about {title} <ArrowUpRight className="text-base scale-75" />
          </Link>
        </Button>
      )}
    </figure>
  );
}

export default ServiceCard;
