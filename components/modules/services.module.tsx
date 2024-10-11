import React from "react";
import Section from "../section";
import ServiceCard from "../service-card";
import StatueOfJustice from "../svgs/statue-of-justice.svg";

function Services({ module }: any) {
  const metaData = module?.metaData || {};
  const content = module?.content || [];

  return (
    <Section fullWidth sectionData={metaData} className="overflow-y-auto">
      <div className="w-full grid-cols-5 grid">
        {content.map((service: any, key: any) => {
          switch (service._type) {
            case "service":
              return <ServiceCard key={key} index={key + 1} {...service} />;

            default:
              null;
          }
        })}

        <div className="col-span-1 col-start-5 h-full relative overflow-hidden">
          <StatueOfJustice className="absolute bottom-0 left-0 stroke-primary/50" />
        </div>
      </div>
    </Section>
  );
}

export default Services;
