"use client";
import Section from "@/components/section";
import { useInView } from "motion/react";
import { useRef } from "react";
import BrandSlider from "./BrandList";
import { brandList } from "./data";
import Testimonial from "./testimonial";
import { type TestimonialSection } from "./types";

export default function TestimonialSection({
  module,
}: {
  module: TestimonialSection;
}) {
  const metaData = module?.metaData || {
    miniTitle: "2. Testimonials",
    title: "What our clients says about us;",
    subtitle:
      "Everything we do is focused on generating more qualified cases for your law firm.",
  };
  const clients = module?.clients;

  const testimonialRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(testimonialRef, { once: true, amount: 0.1 });
  return (
    <Section sectionData={metaData}>
      <Testimonial
        testimonials={clients}
        isInView={isInView}
        sectionRef={testimonialRef}
      />
      <BrandSlider
        brandList={brandList}
        isInView={isInView}
        sectionRef={testimonialRef}
      />
    </Section>
  );
}
