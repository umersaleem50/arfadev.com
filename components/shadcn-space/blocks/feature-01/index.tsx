"use client";
import Section from "@/components/section";
import Feature from "@/components/shadcn-space/blocks/feature-01/feature";
import { ArrowDownUp, BellRing, RotateCw, Tag } from "lucide-react";

const featureData = [
  {
    icon: ArrowDownUp,
    content:
      "Instantly sync and update your documentation across teams without manual rework.",
  },
  {
    icon: BellRing,
    content:
      "Get real-time alerts when docs are updated, reviewed, or need your attention.",
  },
  {
    icon: RotateCw,
    content:
      "Automatically keep your documentation up to date with seamless content refreshes.",
  },
  {
    icon: Tag,
    content:
      "Organize your docs with smart tags for faster search and better discoverability.",
  },
];

const Feature01 = ({ module }) => {
  const metaData = module?.metaData || {};
  const content = module?.content || [];
  return (
    <>
      <Section sectionData={metaData} className="overflow-y-auto">
        <Feature featureData={featureData} />
      </Section>
    </>
  );
};

export default Feature01;
