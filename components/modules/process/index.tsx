"use client";

import { useRef } from "react";

import Section from "@/components/section";
import { ProcessCards } from "./ProcessCards";
import { processTempData } from "./data";

function OurProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <Section
      sectionRef={sectionRef}
      className="relative space-y-6 px-4 sm:px-6 lg:px-8"
      sectionData={{
        title: "How We Bring Ideas to Life",
        subtitle:
          "From Discovery all the way to launching your project. Our process is simple yet effective.",
        miniTitle: "Our Proven Process",
      }}
    >
      <ProcessCards data={processTempData} />
    </Section>
  );
}

export default OurProcess;
