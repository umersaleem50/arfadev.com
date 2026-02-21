import dynamic from "next/dynamic";
import { WhyChooseUsProps } from "./types/why-choose-us.type";
const Column = dynamic(() => import("./Column"));

function WhyChooseUs({ module }: { module: WhyChooseUsProps }) {
  const { title = "", content } = module;

  return (
    <section className="bg-none md:-translate-y-2 md:-mt-16 ">
      <div className="max-w-[85rem] lg:py-24 md:py-16 sm:py-12 py-10 md:px-6 lg:px-0 lg:flex-row flex-col mx-auto bg-accent flex items-center shadow-gray-400 dark:shadow-gray-900 shadow-xl rounded-2xl">
        <h2 className="md:text-3xl text-2xl font-serif lg:-rotate-90 md:mb-8 mb-6 lg:-mb-2 text-accent-foreground">
          {title}
        </h2>
        <div className="flex lg:gap-x-10 md:gap-x-6 md:flex-row flex-col gap-y-6 sm:gap-y-8 md:gap-y-0">
          {content?.map(({ tagline, title }) => {
            return <Column tagline={tagline} title={title} key={title} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
