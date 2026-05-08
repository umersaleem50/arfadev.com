import Section from "@/components/section";
import Bentogrid from "./BentoGrid";
import { BentoGridProps } from "./types";

function OurServices({ module }: { module: BentoGridProps }) {
  const metaData = module?.metaData;
  const gridData = module?.gridData;
  return (
    <Section sectionData={metaData}>
      <Bentogrid gridData={gridData} />
    </Section>
  );
}

export default OurServices;
