import Image from "next/image";
import AnimatedCards from "./grid-items/cards";
import { ConversionFunnelAreaChart } from "./grid-items/conversion-funnel-area-chart";
import ReminderCarousel from "./ReminderAnimation";

const Bentogrid = () => {
  return (
    <section className="grid grid-cols-12 gap-6 items-stretch">
      <div className="lg:col-span-4 col-span-12 overflow-hidden items-stretch">
        <div className="rounded-xl border border-border">
          <div className="bg-muted rounded-t-xl py-8 px-9 relative">
            <AnimatedCards />
          </div>
          <div className="flex flex-col gap-0.5 p-8 border-t border-border">
            <h3 className="text-2xl mb-2 font-medium text-accent dark:text-primary">
              1. Deep Research
            </h3>
            <p className="text-base font-sans font-normal text-muted-foreground">
              We conduct a comprehensive research to find the pain points that
              scare your customers.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:col-span-8 col-span-12 overflow-hidden">
        <div className="rounded-xl border border-border flex items-stretch flex-col h-full">
          <div className="bg-muted rounded-t-xl py-7 lg:px-30 px-6 relative h-full overflow-hidden">
            <Image src={"/assets/gradient.gif"} fill alt="gradient" />
          </div>
          <div className="flex flex-col gap-0.5 p-8 border-t border-border">
            <h3 className="text-2xl mb-2 font-medium text-accent dark:text-primary">
              2. Enhancing User Experience
            </h3>
            <p className="text-base font-sans font-normal text-muted-foreground">
              We research, identify friction, and improve your UX to increase
              customer activation, retention, and convertion rates.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-4 col-span-12 overflow-hidden">
        <div className="rounded-xl border border-border h-full flex flex-col">
          <div className="p-8 bg-muted rounded-t-xl flex-1 flex items-center justify-center">
            <img
              src="https://images.shadcnspace.com/assets/bento-grid/bento-grid-img-1.png"
              alt="layout options"
              className="dark:hidden"
            />
            <img
              src="https://images.shadcnspace.com/assets/bento-grid/bento-grid-darkimg-1.png"
              alt="layout options"
              className="hidden dark:block"
            />
          </div>
          <div className="flex flex-col gap-0.5 p-8 border-t border-border">
            <h3 className="text-2xl mb-2 font-medium text-accent dark:text-primary">
              3. Enhancing UI
            </h3>
            <p className="text-base font-sans font-normal text-muted-foreground">
              We improve your existing UI to increase click-through rates and
              reduce bounce. i.e performance optimization and lazy loading.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-4 col-span-12 overflow-hidden">
        <div className="rounded-xl border border-border h-full flex flex-col">
          <div className="p-8 bg-muted rounded-t-xl flex-1 flex items-center justify-center">
            {/* <img
              src="https://images.shadcnspace.com/assets/bento-grid/bento-grid-img-2.png"
              alt="documentation"
              className="dark:hidden"
            />
            <img
              src="https://images.shadcnspace.com/assets/bento-grid/bento-grid-darkimg-2.png"
              alt="documentation"
              className="hidden dark:block"
            /> */}
            <ConversionFunnelAreaChart />
          </div>
          <div className="flex flex-col gap-0.5 p-8 border-t border-border">
            <h3 className="text-2xl mb-2 font-medium text-accent dark:text-primary">
              4. Matrics & Analytics
            </h3>
            <p className="text-base font-sans font-normal text-muted-foreground">
              We analyze and study your data to find pain points, increase
              click-through rates and reduce bounce.
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
              5. Maximizing Results
            </h3>
            <p className="text-base font-sans font-normal text-muted-foreground">
              We repeat the same process for several times over time to maximize
              conversion and retention rate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bentogrid;
