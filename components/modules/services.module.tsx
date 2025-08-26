import React from "react";
import Section from "../section";
import ServiceCard from "../service-card";
import HeroIllustration from "../svgs/hero-illustration";

function Services({ module }: any) {
  const metaData = module?.metaData || {};
  const content = module?.content || [];

  return (
    <Section fullWidth sectionData={metaData} className="overflow-y-auto">
      <div className="w-full lg:grid-cols-3 md:grid-cols-3 grid-cols-1 grid">
        {content.map((service: any, key: any) => {
          switch (service._type) {
            case "service":
              return <ServiceCard key={key} index={key + 1} {...service} />;

            default:
              null;
          }
        })}

        <div className="col-span-1 sm:col-span-1 md:col-span-2 sm:col-start-1 md:col-start-2  col-start-1 h-[20rem] md:h-full relative -z-10 overflow-hidden">
          {/* <StatueOfJustice className="absolute bottom-0 w-full md:w-auto md:left-0 right-0 stroke-primary" /> */}
          <HeroIllustration className="md:p-6 p-4 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 w-[170%] md:scale-100 sm:w-2/3 md:w-full  h-full left-1/2" />
        </div>
      </div>
    </Section>
  );
  // return (
  //   <Section sectionData={metaData}>
  //     <BentoServices content={content} />
  //   </Section>
  // );
}

export default Services;
