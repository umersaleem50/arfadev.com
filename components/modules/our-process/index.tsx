import Section from "@/components/section";

import FeatureGrid from "./FeatureGrid";
import { featureTempData } from "./data";
import { OurServicesProps } from "./types";

const OurServices = ({ module }: { module: OurServicesProps }) => {
  const metaData = module?.metaData || {};

  const content = module?.content;

  const contentWithIcon = content.map((item, index) => {
    return { ...item, icon: featureTempData[index].icon };
  });
  return (
    <>
      <Section
        sectionData={metaData}
        className="overflow-y-auto overflow-x-hidden"
      >
        <FeatureGrid gridItems={contentWithIcon} />
      </Section>
    </>
  );
};

export default OurServices;
