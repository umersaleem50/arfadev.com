import React from "react";

const Column = ({ title, tagline }: { title: string; tagline: string }) => {
  return (
    <div className="lg:max-w-[20rem] space-y-3 text-center">
      <h3 className="text-primary  text-xl font-serif font-bold">{title}</h3>
      <hr className="border-secondary-foreground/40" />
      <p className="text-muted-foreground text-sm font-sans">{tagline}</p>
    </div>
  );
};

function WhyChooseUs({ module }: any) {
  const { title = "", content = [] } = module;

  return (
    <section className="bg-none">
      <div className="max-w-[85rem] lg:py-24 md:py-16 md:px-6 lg:px-0 lg:flex-row flex-col mx-auto bg-secondary flex items-center md:-translate-y-1/2 ">
        <h2 className="text-3xl font-bold lg:-rotate-90 md:mb-8 ">{title}</h2>
        <div className="flex lg:gap-x-10 md:gap-x-6 md:flex-row flex-col gap-y-2 sm:gap-y-4 md:gap-y-0">
          {content.map((el: any, key: number) => {
            return <Column {...el} key={key} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
