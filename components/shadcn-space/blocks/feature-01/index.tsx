"use client";
import Section from "@/components/section";
import Feature from "@/components/shadcn-space/blocks/feature-01/feature";
import {
  ChartCandlestick,
  HandCoins,
  Headset,
  HeartHandshake,
} from "lucide-react";

const featureData = [
  {
    icon: Headset,
    content: "Get our full attention 24/7 even for your post production apps.",
  },
  {
    icon: ChartCandlestick,
    content:
      "Get real-time alerts when projects are updated, reviewed, or need your attention.",
  },
  {
    icon: HandCoins,
    content:
      "Get your refund in full if we failed to achieve your desire goals.",
  },
  {
    icon: HeartHandshake,
    content: "Get discounts and bonuses on almost all the services we offer.",
  },
];

const Feature01 = ({ module }: any) => {
  const metaData = module?.metaData || {};
  const content = module?.content || [];
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
