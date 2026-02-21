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
    content: (
      <p>
        We build landing pages that convert visitors into customers and drive
        sales.
      </p>
    ),
  },
  {
    icon: <Monitor className="w-16 h-16" />,
    content: (
      <p>
        We build dashboards and optimize SaaS onboarding to increase activation
        and retention.
      </p>
    ),
  },
  {
    icon: <Compass className="w-16 h-16" />,
    content: (
      <p>We optimize SaaS onboarding to increase activation and retention.</p>
    ),
  },
  {
    icon: <Eye className="w-16 h-16" />,
    content: (
      <p>On-page SEO for better visibility on search engines i.e. Google.</p>
    ),
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
