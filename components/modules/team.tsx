"use client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import Section from "../section";
import TeamCard from "../TeamCard";

function Team({ module }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const metaData = module?.metaData || {};
  const team = module?.team;

  return (
    <Section sectionData={metaData}>
      <div className="flex flex-col md:gap-y-6 gap-y-4" ref={ref}>
        {team?.map(({ name, bio, photo, professions }: any, index: number) => (
          <TeamCard
            name={name}
            photo={photo}
            professions={professions}
            bio={bio}
            key={name}
            isInverted={index % 2 === 0}
            style={isMobile ? null : { y: md }}
            divStyle={isMobile ? null : { y: md }}
          />
        ))}
      </div>
    </Section>
  );
}

export default Team;
