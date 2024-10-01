import Link from "next/link";

import { buttonVariants } from "./ui/button";
import CustomImage from "./custom-image";

import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";

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
  return (
    <figure
      className={cn(
        index % 2 === 0 ? "bg-secondary" : "bg-muted-foreground",
        "h-auto flex flex-col p-6 items-start space-y-4",
        className
      )}
    >
      {/* {SVGComponent && (
        <SVGComponent className="mt-32 mb-4 h-[10rem] overflow-hidden" />
      )} */}
      {icon && (
        <div className="mt-32 mb-4 h-[6rem] w-[6rem] overflow-hidden relative">
          <CustomImage
            src={urlFor(icon?.asset).url()}
            imageOBJ={icon?.asset}
            fill
            alt="SVG"
            className="object-contain"
          />
        </div>
      )}
      <h3 className="text-2xl font-serif text-brand-black">{title}</h3>
      <p className="text-sm font-sans text-brand-black">{subtitle}</p>
      <Link
        className={buttonVariants({ variant: "link" })}
        href={page?.slug?.current || "/"}
      >
        Learn More
      </Link>
    </figure>
  );
}

export default ServiceCard;
