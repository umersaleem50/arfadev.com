import { InteractiveHoverButton } from "@/components/InteractiveUIButton";

import SanityImage from "@/components/SanityImage";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { PortfolioHeaders } from "./portfolio-header";
import { PortfolioCardProps } from "./types/portfolio.type";

export function PortfolioCard({
  index,
  title,
  description,
  results,
  page,
  cover,
  options = { reverse: index % 2 !== 0 ? false : true },
}: PortfolioCardProps) {
  const [firstCover, secondCover] = cover;
  const indexedTitle = `${index}. ${title}`;
  return (
    <div
      className={cn(
        "max-w-[85rem] mx-auto grid md:grid-cols-12 grid-cols-1 lg:gap-x-6 md:gap-x-4 items-end lg:pb-24 md:pb-16 border-b border-border lg:mb-24 md:mb-20 sm:mb-16 mb-14 last:mb-0 last:pb-0 last:border-0",
      )}
    >
      <div
        className={cn(
          "lg:col-span-6 md:col-span-5 col-span-1 w-full lg:h-[42rem] md:h-[30rem] sm:inline-block hidden relative bg-fixed rounded-3xl overflow-hidden",
          options.reverse && "md:order-last",
        )}
      >
        {firstCover ? (
          <SanityImage
            image={firstCover}
            fill
            alt={firstCover?.alt}
            objectFit={firstCover?.objectFit}
          />
        ) : null}
      </div>
      <div
        className={cn(
          "lg:col-span-4 md:col-span-5 col-span-1",
          options.reverse && "md:order-2",
        )}
      >
        <PortfolioHeaders title={indexedTitle} subtitle={description} />
        <div className="w-full h-[24rem] relative rounded-3xl overflow-hidden">
          {secondCover ? (
            <SanityImage
              image={secondCover}
              fill
              alt={secondCover?.alt}
              objectFit={secondCover?.objectFit}
            />
          ) : null}
        </div>
      </div>
      <div
        className={cn(
          "md:col-span-2 col-span-1 flex flex-row md:inline-block gap-x-8 md:gap-x-0 justify-between py-8 md:py-0 items-end",
          options.reverse && "md:order-first",
        )}
      >
        <div className="md:mb-10 md:-rotate-90 md:-translate-y-full">
          <p className="md:text-3xl sm:text-2xl text-xl font-serif text-muted-foreground">
            {results.at(0)}
          </p>
          <p className="text-sm font-sans text-muted-foreground">
            {results.at(1)}
          </p>
        </div>
        <InteractiveHoverButton className="w-1/2 sm:w-1/3 md:w-full">
          <Link
            href={`/${page?.slug?.current}` || "/not-found"}
            className="w-full"
          >
            Case Study
          </Link>
        </InteractiveHoverButton>
      </div>
    </div>
  );
}
