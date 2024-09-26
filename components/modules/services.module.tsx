import React from "react";
import Section from "../section";
import ServiceCard from "../service-card";
import StatueOfJustice from "../svgs/statue-of-justice.svg";
import {
  CompassSVG,
  EyeSVG,
  MonitorSVG,
  ToolsSVG,
} from "../svgs/service-card-svgs";

function Services() {
  return (
    <Section
      fullWidth
      options={{
        section: "3. Our Services",
        title: "Who we help?",
        subtitle:
          "Our goal is to maximize your revenue by having more clients, irrespective of services you provide.",
      }}
    >
      <div className="w-full grid-cols-5 grid">
        <ServiceCard
          index={1}
          className="col-span-1 col-start-1"
          SVGComponent={ToolsSVG}
        />
        <ServiceCard
          index={2}
          className="col-span-1 col-start-2"
          SVGComponent={MonitorSVG}
        />
        <ServiceCard
          index={3}
          className="col-span-1 col-start-3"
          SVGComponent={CompassSVG}
        />
        <ServiceCard
          index={4}
          className="col-span-1 col-start-4"
          SVGComponent={EyeSVG}
        />
        <div className="col-span-1 col-start-5 h-full relative overflow-hidden">
          <StatueOfJustice className="h-full -translate-x-1/3 bottom-0 absolute" />
        </div>
      </div>
    </Section>
  );
}

export default Services;
