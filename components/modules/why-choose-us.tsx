import React from "react";

const Column = () => {
  return (
    <div className="max-w-[20rem] space-y-3 text-center">
      <h3 className="text-secondary-foreground text-xl font-serif font-bold">
        1. Proven Growth
      </h3>
      <hr />
      <p className="text-secondary-foreground text-sm font-sans">
        Youll see measurable growth in your rankings, traffic, and cases.
      </p>
    </div>
  );
};

function WhyChooseUs() {
  return (
    <div className="bg-[#031625]">
      <div className="w-[85rem] mx-auto bg-secondary flex py-24 items-center  -translate-y-1/2 ">
        <h2 className="text-3xl font-bold -rotate-90 text-secondary-foreground">
          Why Choose Us?
        </h2>
        <div className="flex gap-x-10">
          <Column />
          <Column />
          <Column />
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
