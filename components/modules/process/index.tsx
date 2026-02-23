"use client";

import { useRef } from "react";

import AnimatedTabs from "@/components/AnimatedTabs";
import Section from "@/components/section";
import Bentogrid from "./BentoGrid";

function OurProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <Section
      sectionRef={sectionRef}
      sectionData={{
        title: "How We Bring Ideas to Life",
        subtitle:
          "From Discovery all the way to launching your project. Our process is simple yet effective.",
        miniTitle: "Our Proven Process",
      }}
    >
      {/* <ProcessCards data={processTempData} /> */}

      <AnimatedTabs
        tabs={[
          { id: "1", label: "OnBoarding Flows" },
          { id: "2", label: "Landing Pages" },
        ]}
        variant="pill"
        className="mb-4"
      />

      <Bentogrid />
    </Section>
  );
}

export default OurProcess;
