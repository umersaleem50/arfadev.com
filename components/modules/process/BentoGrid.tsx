import AnimatedUiBlock from "./AnimatedUIBlock";
import ReminderCarousel from "./ReminderAnimation";

const Bentogrid = () => {
  return (
    <section className="grid grid-cols-12 gap-6">
      <div className="lg:col-span-4 col-span-12 overflow-hidden">
        <div className="rounded-xl border border-border">
          <div className="bg-muted rounded-t-xl py-8 px-9 relative">
            <ReminderCarousel />
          </div>
          <div className="flex flex-col gap-0.5 p-8 border-t border-border">
            <h3 className="text-2xl mb-2 font-medium text-accent dark:text-primary">
              1. Awesome tailwind components
            </h3>
            <p className="text-base font-sans font-normal text-muted-foreground">
              A collection of custom-built, highly flexible Tailwind CSS
              components
            </p>
          </div>
        </div>
      </div>
      <div className="lg:col-span-8 col-span-12 overflow-hidden">
        <div className="rounded-xl border border-border">
          <div className="bg-muted rounded-t-xl py-7 lg:px-30 px-6 relative">
            <AnimatedUiBlock />
          </div>
          <div className="flex flex-col gap-0.5 p-8 border-t border-border">
            <h3 className="text-2xl mb-2 font-medium text-accent dark:text-primary">
              2. Beautifully crafted ui blocks
            </h3>
            <p className="text-base font-sans font-normal text-muted-foreground">
              Build powerful dashboards in no time with per-built Tailwind
              components and layouts. Whether you're creating admin panels,
              analytics dashboards, or SaaS back-ends.
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
              3. Multiple layout options
            </h3>
            <p className="text-base font-sans font-normal text-muted-foreground">
              We have LTR and RTL options along with different layout options as
              well.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-4 col-span-12 overflow-hidden">
        <div className="rounded-xl border border-border h-full flex flex-col">
          <div className="p-8 bg-muted rounded-t-xl flex-1 flex items-center justify-center">
            <img
              src="https://images.shadcnspace.com/assets/bento-grid/bento-grid-img-2.png"
              alt="documentation"
              className="dark:hidden"
            />
            <img
              src="https://images.shadcnspace.com/assets/bento-grid/bento-grid-darkimg-2.png"
              alt="documentation"
              className="hidden dark:block"
            />
          </div>
          <div className="flex flex-col gap-0.5 p-8 border-t border-border">
            <h3 className="text-2xl mb-2 font-medium text-accent dark:text-primary">
              4. Well documented
            </h3>
            <p className="text-base font-sans font-normal text-muted-foreground">
              A well-structured and easy-to-follow documentation for your
              development journey.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-4 col-span-12 overflow-hidden">
        <div className="rounded-xl border border-border h-full flex flex-col">
          <div className="p-8 bg-muted rounded-t-xl flex-1 flex items-center justify-center relative">
            <img
              src="https://images.shadcnspace.com/assets/bento-grid/bento-grid-img-3.png"
              alt="color options"
            />
          </div>
          <div className="flex flex-col gap-0.5 p-8 border-t border-border">
            <h3 className="text-2xl mb-2 font-medium text-accent dark:text-primary">
              5. Multiple color options
            </h3>
            <p className="text-base font-sans font-normal text-muted-foreground">
              Unlimited color options to match with your brand instantly and
              easily.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bentogrid;
