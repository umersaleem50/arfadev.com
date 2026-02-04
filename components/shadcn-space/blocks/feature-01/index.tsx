"use client";
import Section from "@/components/section";
import Feature from "@/components/shadcn-space/blocks/feature-01/feature";
import Compass from "@/components/svgs/compass";
import Eye from "@/components/svgs/eye";
import Monitor from "@/components/svgs/monitor";
import PencilIcon from "@/components/svgs/pencil-icon";

const featureData = [
  {
    icon: <PencilIcon className="w-16 h-16" />,
    content: "High conversion landing pages integrated with headless CMS.",
  },
  {
    icon: <Monitor className="w-16 h-16" />,
    content: "Secure dashboards and admin panels with real-time updates.",
  },
  {
    icon: <Compass className="w-16 h-16" />,
    content: "Scalable backend development and API integration.",
  },
  {
    icon: <Eye className="w-16 h-16" />,
    content: "On-page SEO for better visibility on search engines i.e. Google.",
  },
];

const Feature01 = ({ module }: any) => {
  const metaData = module?.metaData || {};

  return (
    <>
      <Section
        sectionData={metaData}
        className="overflow-y-auto overflow-x-hidden"
      >
        <Feature featureData={featureData} />
      </Section>
    </>
  );
};

export default Feature01;
