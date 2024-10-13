import React from "react";
import Section from "../section";
import ServiceCard from "../service-card";
import StatueOfJustice from "../svgs/statue-of-justice.svg";

function Services({ module }: any) {
  const metaData = module?.metaData || {};
  const content = module?.content || [];

  return (
    <Section fullWidth sectionData={metaData} className="overflow-y-auto">
      <div className="w-full lg:grid-cols-5 md:grid-cols-3 grid-cols-1 grid">
        {content.map((service: any, key: any) => {
          switch (service._type) {
            case "service":
              return <ServiceCard key={key} index={key + 1} {...service} />;

            default:
              null;
          }
        })}

        <div className="col-span-1 lg:col-start-5 md:col-start-3 col-start-1 h-[30rem] md:h-full relative overflow-hidden">
          <StatueOfJustice className="absolute bottom-0 w-full md:w-auto md:left-0 right-0 stroke-primary/50" />
        </div>
      </div>
    </Section>
  );
}

export default Services;
