import Section from "@/components/section";
import BrandSlider from "./BrandList";
import { brandList, tempTestimonials } from "./data";
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

  console.log(module);
  return (
    <Section sectionData={metaData}>
      <Testimonial testimonials={tempTestimonials} />
      <BrandSlider brandList={brandList} />
    </Section>
  );
}
