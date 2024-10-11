import React from "react";

const Column = ({ title, tagline }: { title: string; tagline: string }) => {
  return (
    <div className="max-w-[20rem] space-y-3 text-center">
      <h3 className="text-primary  text-xl font-serif font-bold">{title}</h3>
      <hr className="border-secondary-foreground" />
      <p className="text-secondary-foreground/80 text-sm font-sans">
        {tagline}
      </p>
    </div>
  );
};

function WhyChooseUs({ module }: any) {
  const { title = "", content = [] } = module;
  return (
    <section className="bg-none">
      <div className="w-[85rem] mx-auto bg-secondary flex py-24 items-center  -translate-y-1/2 ">
        <h2 className="text-3xl font-bold -rotate-90 ">{title}</h2>
        <div className="flex gap-x-10">
          {content.map((el: any, key: number) => {
            return <Column {...el} key={key} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
