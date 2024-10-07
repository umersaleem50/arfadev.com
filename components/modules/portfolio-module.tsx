import React from "react";
import { PortfolioOptions } from "../section-options";
import Section from "../section";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

// export function PortfolioCard({ reverse = false }: { reverse?: boolean }) {
//   return (
//     <div
//       className={cn(
//         "max-w-[85rem] mx-auto grid grid-cols-12 gap-x-6 items-end pb-16 border-b border-secondary/40 last:border-none first:mb-16 mb-16"
//       )}
//     >
//       <div
//         className={cn(
//           "col-span-6 relative h-[42rem]",
//           reverse ? "col-start-7" : "col-start-1"
//         )}
//       >
//         <Image src={"/card.jpg"} fill alt="card" className="object-cover" />
//       </div>
//       <div
//         className={cn("col-span-4", reverse ? "col-start-3" : "col-start-7")}
//       >
//         <CardHeading
//           title="1. Chishti Law Firm"
//           subtitle="Call anytime for immediate and personal attention at no charge."
//           className="text-foreground"
//         />
//         <div className="w-full h-[24rem] relative">
//           <Image src={"/flask.jpg"} fill alt="card" className="object-cover" />
//         </div>
//       </div>
//       <div
//         className={cn("col-span-2", reverse ? "col-start-1" : "col-start-11")}
//       >
//         <div className="mb-6 -rotate-90 -translate-y-full">
//           <h3 className="text-6xl font-serif font-medium text-foreground">
//             400%
//           </h3>
//           <p className="text-sm font-sans text-foreground">
//             Growth in first month
//           </p>
//         </div>
//         <Button variant={"secondary"} className="w-full" asChild>
//           <Link href={"/"}>Case Study</Link>
//         </Button>
//       </div>
//     </div>
//   );
// }

export interface IPortfolioCard {
  index: number;
  title: string;
  subtitle: string;
  stats: { title: string; subtitle: string };
  options?: { reverse: boolean };
}

export function PortfolioCard({
  index,
  title,
  subtitle,
  stats,
  options = { reverse: index % 2 !== 0 ? false : true },
}: IPortfolioCard) {
  return (
    <div
      className={cn(
        "max-w-[85rem] mx-auto grid grid-cols-12 gap-x-6 items-end pb-24 border-b border-muted-foreground mb-24"
      )}
    >
      <div
        className={cn(
          "col-span-6 relative h-[42rem]",
          options.reverse && "order-last"
        )}
      >
        <Image src={"/card.jpg"} fill alt="card" className="object-cover" />
      </div>
      <div className={cn("col-span-4", options.reverse && "order-2")}>
        <PortfolioOptions
          title={title}
          subtitle={subtitle}
          className="text-foreground"
        />
        <div className="w-full h-[24rem] relative">
          <Image src={"/flask.jpg"} fill alt="card" className="object-cover" />
        </div>
      </div>
      <div className={cn("col-span-2", options.reverse && "order-first")}>
        <div className="mb-10 -rotate-90 -translate-y-full">
          <h3 className="text-5xl font-serif font-medium text-foreground">
            {stats.title}
          </h3>
          <p className="text-sm font-sans text-foreground">{stats.subtitle}</p>
        </div>
        <Button
          variant={index % 2 === 0 ? "outline" : "default"}
          className="w-full"
          asChild
        >
          <Link href={"/"}>Case Study</Link>
        </Button>
      </div>
    </div>
  );
}

function PortfolioModuel() {
  return (
    <Section
      className="bg-card"
      sectionHeader={{
        title: "Anyone can makes promise; We will give you proof",
        className: "text-foreground ",
        miniTitle: "1. Case Studies",
      }}
    >
      <PortfolioCard
        index={1}
        stats={{ title: "400%", subtitle: "Growth in first month" }}
        title="1. Chishti Law Firm"
        subtitle="Call anytime for immediate and personal attention at no charge."
      />
      <PortfolioCard
        index={2}
        options={{ reverse: true }}
        title="2. Shafique Law Firm"
        subtitle="Call anytime for immediate and personal attention at no charge."
        stats={{ title: "3x More", subtitle: "Clients in first month" }}
      />

      <div className="flex justify-between items-center pt-8">
        <p className="text-sm leading-normal text-foreground font-sans max-w-md">
          Everything we do is focused on generating more qualified cases for
          your law firm.
        </p>
        <Button variant={"outline"} size={"lg"}>
          Explore More
        </Button>
      </div>
    </Section>
  );
}

export default PortfolioModuel;
