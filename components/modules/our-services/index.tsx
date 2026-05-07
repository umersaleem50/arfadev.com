import Section from "@/components/section";
import Bentogrid from "./BentoGrid";
import { BentoGridProps } from "./types";

function OurServices({ module }: { module: BentoGridProps }) {
  const metaData = module?.metaData;
  return (
    <Section sectionData={metaData}>
      <Bentogrid />
    </Section>
  );
}

export default OurServices;
