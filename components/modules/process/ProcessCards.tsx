import { ProcessCard } from "./ProcessCard";
import { processType } from "./types";

export function ProcessCards({ data }: { data: processType[] }) {
  return (
    <>
      {/* Sticky heading (GSAP pin replacement) */}
      <div className="sticky top-20 z-10">
        {/* <SectionHeading
          badge="Our Proven Process 🌟"
          heading="How We Bring Ideas to Life"
          description="Explore our latest projects featuring AI-powered platforms."
          size="md"
          align="center"
          as="h2"
          className="mb-10"
        /> */}
      </div>

      <div className="relative space-y-10">
        {data.map((slide, index) => (
          <ProcessCard key={index} slide={slide} index={index} />
        ))}
      </div>
    </>
  );
}
