import AnimatedCards from "./grid-items/cards";
import { ConversionFunnelAreaChart } from "./grid-items/conversion-funnel-area-chart";
import DisplayCards from "./grid-items/display-card";
import ReminderCarousel from "./ReminderAnimation";
import { MarketingDashboard } from "./SaasCard";

const Bentogrid = () => {
  return (
    <section className="grid grid-cols-12 gap-6 items-stretch">
      <div className="lg:col-span-4 col-span-12 overflow-hidden items-stretch group ">
        <div className="rounded-xl border border-border">
          <div className="bg-muted rounded-t-xl relative">
            <AnimatedCards />
          </div>
          <div className="flex flex-col gap-0.5 p-8 border-t border-border">
            <h3 className="text-2xl mb-2 font-medium text-accent dark:text-primary">
              Website Development
            </h3>
            <p className="text-base font-sans font-normal text-muted-foreground">
              We develop websites that tell your brand story, build trust, and
              convert clients for you.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:col-span-8 col-span-12 overflow-hidden">
        <div className="rounded-xl border border-border flex items-stretch flex-col h-full">
          <div className="bg-muted rounded-t-xl py-7 lg:px-16 px-6 relative h-full overflow-hidden">
            <MarketingDashboard className="absolute top-5 left-10" />
          </div>
          <div className="flex flex-col gap-0.5 p-8 border-t border-border">
            <h3 className="text-2xl mb-2 font-medium text-accent dark:text-primary">
              SaaS Development
            </h3>
            <p className="text-base font-sans font-normal text-muted-foreground">
              We develop SaaS for your business to earn extra money.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-4 col-span-12 overflow-hidden">
        <div className="rounded-xl border border-border h-full flex flex-col">
          <div className="p-8 bg-muted rounded-t-xl flex-1 flex items-center justify-center">
            <DisplayCards />
          </div>
          <div className="flex flex-col gap-0.5 p-8 border-t border-border">
            <h3 className="text-2xl mb-2 font-medium text-accent dark:text-primary">
              Custom CMS
            </h3>
            <p className="text-base font-sans font-normal text-muted-foreground">
              We develop custom CMS for your marketing compaigns using NextJS
              and Sanity.io
            </p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-4 col-span-12 overflow-hidden">
        <div className="rounded-xl border border-border h-full flex flex-col">
          <div className="p-8 bg-muted rounded-t-xl flex-1 flex items-center justify-center">
            <ConversionFunnelAreaChart />
          </div>
          <div className="flex flex-col gap-0.5 p-8 border-t border-border">
            <h3 className="text-2xl mb-2 font-medium text-accent dark:text-primary">
              Dashboards Development
            </h3>
            <p className="text-base font-sans font-normal text-muted-foreground">
              We develop interactive dashboards, portals, and admin panels for
              web applications.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-4 col-span-12 overflow-hidden">
        <div className="rounded-xl border border-border h-full flex flex-col">
          <div className="p-8 bg-muted rounded-t-xl flex-1 flex items-center justify-center relative">
            <ReminderCarousel />
          </div>
          <div className="flex flex-col gap-0.5 p-8 border-t border-border">
            <h3 className="text-2xl mb-2 font-medium text-accent dark:text-primary">
              Backend Development
            </h3>
            <p className="text-base font-sans font-normal text-muted-foreground">
              We develop secure Restful API for the application that scales with
              your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bentogrid;
