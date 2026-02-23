"use client";
import Section from "@/components/section";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import TeamCard from "./TeamCard";
import { TeamProps, TeamSectionProps } from "./types";

function TeamSection({ module }: { module: TeamSectionProps }) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const sectionMetaData = module?.metaData || {};
  const team = module?.team;

  return (
    <Section
      sectionData={sectionMetaData}
      className="bg-muted text-muted-foreground dark:bg-muted dark:text-muted-foreground"
    >
      <div className="flex flex-col md:gap-y-6 gap-y-4" ref={ref}>
        {team?.map(
          ({ name, bio, photo, professions }: TeamProps, index: number) => (
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
          ),
        )}
      </div>
    </Section>
  );
}

export default TeamSection;
