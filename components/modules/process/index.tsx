import Section from "@/components/section";
import Bentogrid from "./BentoGrid";
import { OurProcessProps } from "./types";

function OurProcess({ module }: { module: OurProcessProps }) {
  const metaData = module?.metaData;
  return (
    <Section sectionData={metaData}>
      {/* <ProcessCards data={processTempData} /> */}

      <Bentogrid />
    </Section>
  );
}

export default OurProcess;
