import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import AnimatedCards from "./grid-items/cards";
import { ConversionFunnelAreaChart } from "./grid-items/conversion-funnel-area-chart";
import DisplayCards from "./grid-items/display-card";
import ReminderCarousel from "./ReminderAnimation";
import { Toolbar } from "./Toolbar";
import { BentoItem } from "./types";

const defaultData: BentoItem[] = [
  {
    url: "#",
    description:
      "We develop websites that tell your brand story, build trust, and convert clients for you.",
    title: "Website Development",
  },
  {
    url: "#",
    description:
      "We help startups and enterprise businesses to manage their content for marketing campaigns using NextJS and Sanity.io",
    title: "CMS Development",
  },
  {
    url: "#",
    description:
      "We will deploy, manage, and configure your application or services on Azure cloud.",
    title: "Azure DevOps",
  },
  {
    url: "#",
    description:
      "We develop interactive dashboards, portals, and admin panels for web applications.",
    title: "SaaS Development",
  },
  {
    url: "#",
    description:
      "We develop secure Restful API for the application that scales with your business.",
    title: "Backend Development",
  },
];

const Bentogrid = ({ gridData = defaultData }: { gridData?: BentoItem[] }) => {
  const [firstCell, secondCell, thirdCell, forthCell, fifthCell] = gridData;
  return (
    <section className="grid grid-cols-12 gap-6 items-stretch">
      <div className="lg:col-span-4 col-span-12 overflow-hidden items-stretch group ">
        <div className="rounded-xl border border-border">
          <div className="bg-muted rounded-t-xl relative">
            <AnimatedCards />
          </div>
          <div className="flex flex-col gap-0.5 md:p-8 p-4 border-t border-border items-start">
            <h3 className="text-2xl mb-2 font-medium text-accent dark:text-primary">
              {firstCell.title}
            </h3>
            <p className="text-base font-sans font-normal text-muted-foreground">
              {firstCell.description}
            </p>
            <Button className="mt-4" variant={"outline"} asChild>
              <Link href={firstCell.url}>
                Learn More <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="lg:col-span-8 col-span-12 overflow-hidden">
        <div className="rounded-xl border border-border flex items-stretch flex-col h-full">
          <div className="flex items-center justify-center bg-muted rounded-t-xl py-7 lg:px-16 px-6 relative h-full overflow-hidden min-h-[200px] z-10">
            <Toolbar />
          </div>
          <div className="flex flex-col gap-0.5 md:p-8 p-4 border-t border-border items-start">
            <h3 className="text-2xl mb-2 font-medium text-accent dark:text-primary">
              {secondCell.title}
            </h3>
            <p className="text-base font-sans font-normal text-muted-foreground">
              {secondCell.description}
            </p>
            <Button className="mt-4" variant={"outline"} asChild>
              <Link href={secondCell.url}>
                Learn More <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="lg:col-span-4 col-span-12 overflow-hidden">
        <div className="rounded-xl border border-border h-full flex flex-col opacity-70 saturate-0">
          <div className="md:p-8 p-4 bg-muted rounded-t-xl flex-1 flex items-center justify-center overflow-hidden">
            <DisplayCards />
          </div>
          <div className="flex flex-col gap-0.5 md:p-8 p-4 border-t border-border items-start ">
            <h3 className="text-2xl mb-2 font-medium text-accent dark:text-primary">
              {thirdCell.title}
            </h3>
            <p className="text-base font-sans font-normal text-muted-foreground">
              {thirdCell.description}
            </p>
            <Button className="mt-4" variant={"outline"} asChild disabled>
              <Link href={secondCell.url}>Offering Soon</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="lg:col-span-4 col-span-12 overflow-hidden">
        <div className="rounded-xl border border-border h-full flex flex-col">
          <div className="md:p-8 p-4 bg-muted rounded-t-xl flex-1 flex items-center justify-center">
            <ConversionFunnelAreaChart />
          </div>
          <div className="flex flex-col gap-0.5 md:p-8 p-4 border-t border-border items-start">
            <h3 className="text-2xl mb-2 font-medium text-accent dark:text-primary">
              {forthCell.title}
            </h3>
            <p className="text-base font-sans font-normal text-muted-foreground">
              {forthCell.description}
            </p>
            <Button className="mt-4" variant={"outline"} asChild>
              <Link href={forthCell.url}>
                Learn More <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="lg:col-span-4 col-span-12 overflow-hidden">
        <div className="rounded-xl border border-border h-full flex flex-col">
          <div className="md:p-8 p-4 bg-muted rounded-t-xl flex-1 flex items-center justify-center relative">
            <ReminderCarousel />
          </div>
          <div className="flex flex-col gap-0.5 md:p-8 p-4 border-t border-border items-start">
            <h3 className="text-2xl mb-2 font-medium text-accent dark:text-primary">
              {fifthCell.title}
            </h3>
            <p className="text-base font-sans font-normal text-muted-foreground">
              {fifthCell.description}
            </p>
            <Button className="mt-4" variant={"outline"} asChild>
              <Link href={fifthCell.url}>
                Learn More <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bentogrid;
