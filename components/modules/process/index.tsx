import Section from "@/components/section";
import Bentogrid from "./BentoGrid";

function OurProcess() {
  return (
    <Section
      sectionData={{
        title: "How We Bring Ideas to Life",
        subtitle:
          "From Discovery all the way to launching your project. Our process is simple yet effective.",
        miniTitle: "Our Proven Process",
      }}
    >
      {/* <ProcessCards data={processTempData} /> */}

      <Bentogrid />
    </Section>
  );
}

export default OurProcess;
