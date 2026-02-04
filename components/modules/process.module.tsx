"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Section from "../section";
import { Badge } from "../ui/badge";

interface processType {
  title: string;
  tagline: string;
  description: string;
  bg_image: string;
  deliverables: { item: string }[];
}

const ProcessCards: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const process: processType[] = [
    {
      title: "Discovery & Strategy",
      tagline: "Getting to Know Your Big Idea",
      description:
        "We begin by diving deep into your vision, your goals, and the problem you’re solving...",
      deliverables: [
        { item: "Detailed market insights" },
        { item: "Comprehensive competitor breakdown" },
        { item: "A winning strategy tailored to your product" },
      ],
      bg_image:
        "https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUyaDh3a2RpOWdvYzVkeWFsbGJ1aHZzMGxubWloaGtqb3M3anBkMXhoMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KcnbWfsuFr7JpgowGT/giphy.gif",
    },
    {
      title: "Planning & Wireframes",
      tagline: "Mapping Out Your Vision",
      description:
        "Once we know where you want to go, we carefully map out how to get there...",
      deliverables: [
        { item: "Complete project blueprint" },
        { item: "High-fidelity wireframes" },
        { item: "Technical implementation plan" },
      ],
      bg_image: "/assets/wireframe-2.gif",
    },
    {
      title: "Design & Development",
      tagline: "Building Your Dream Into Reality",
      description: "This is where ideas start to take shape...",
      deliverables: [
        { item: "User-friendly platform" },
        { item: "Scalable development" },
        { item: "Production-ready build" },
      ],
      bg_image:
        "https://cdn.dribbble.com/userupload/42585612/file/original-01d8783a8d9205f5bd871cad93d1c0e4.png?vertical=center",
    },
    {
      title: "Launch & Growth",
      tagline: "Getting You Out There",
      description: "Bringing your platform to life is just the beginning...",
      deliverables: [
        { item: "Launch support" },
        { item: "Marketing strategy" },
        { item: "Growth guidance" },
      ],
      bg_image:
        "https://cdn.dribbble.com/userupload/42995628/file/original-fa677916f14a0002a11564fbd6b9f5d2.png?vertical=center",
    },
  ];

  return (
    <Section
      sectionRef={sectionRef}
      className="relative space-y-6 px-4 sm:px-6 lg:px-8"
      sectionData={{
        title: "How We Bring Ideas to Life",
        subtitle:
          "From Discovery all the way to launching your project. Our process is simple yet effective.",
        miniTitle: "Our Proven Process",
      }}
    >
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
        {process.map((slide, index) => (
          <ProcessCard key={index} slide={slide} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default ProcessCards;

const ProcessCard = ({
  slide,
  index,
}: {
  slide: processType;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });

  // Responsive animation values
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0.5]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const z = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        opacity,
        rotateX,
        z,
      }}
      className="sticky top-28 mb-10"
    >
      <div
        className="relative w-full rounded-lg bg-cover p-6 sm:p-8 lg:p-10 h-[500px]"
        style={{ backgroundImage: `url(${slide.bg_image})` }}
      >
        <div className="space-y-4 rounded-md p-6 backdrop-blur-lg md:max-w-[40%] bg-background/80">
          <h3 className="text-2xl md:text-3xl font-serif text-accent dark:text-primary">
            {index + 1}. {slide.title}
          </h3>
          <p className="text-sm md:text-base text-foreground font-sans">
            {slide.tagline}
          </p>

          <p className="text-sm md:text-base text-foreground font-sans">
            {slide.description}
          </p>

          <ul className="flex flex-wrap gap-2 pt-4">
            {slide.deliverables.map((d, i) => (
              <Badge
                key={i}
                className="rounded-full px-4 py-1 text-xs backdrop-blur "
              >
                {d.item}
              </Badge>
            ))}
          </ul>
        </div>

        {/* Index */}
        <span
          className="absolute bottom-6 right-6 text-7xl font-extrabold text-black/10"
          aria-hidden
        >
          {index + 1}
        </span>
      </div>
    </motion.div>
  );
};
