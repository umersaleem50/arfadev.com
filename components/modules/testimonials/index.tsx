"use client";
import Section from "@/components/section";
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

  return (
    <Section sectionData={metaData}>
      <Testimonial testimonials={clients} sectionRef={testimonialRef} />
      <BrandSlider brandList={brandList} sectionRef={testimonialRef} />
    </Section>
  );
}
