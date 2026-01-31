"use client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Section from "../section";
import TeamCard from "../TeamCard";

function Team({ module }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const metaData = module?.metaData || {};
  const team = module?.team;

  const motionArr = [md, md];

  return (
    <Section sectionData={metaData}>
      <div className="flex flex-col md:gap-y-6" ref={ref}>
        {team?.map(({ name, bio, photo, professions }: any, index: number) => (
          <TeamCard
            name={name}
            photo={photo}
            professions={professions}
            bio={bio}
            key={name}
            isInverted={index % 2 === 0}
            style={{ y: md }}
            divStyle={{ y: sm }}
          />
        ))}
      </div>
    </Section>
  );
}

export default Team;
