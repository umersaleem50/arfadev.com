import React from "react";
import HorizontalSlider from "../horizontal-slider";
import SectionHeading from "../section-options";

function AwardModules({ module }: any) {
  const { metaData, content } = module;
  return (
    <section className="bg-primary/30 w-full h-full lg:pt-24 relative">
      {metaData && (
        <SectionHeading color="secondary" className={"mb-24"} {...metaData} />
      )}
      <HorizontalSlider content={content} />
    </section>
  );
}

export default AwardModules;
