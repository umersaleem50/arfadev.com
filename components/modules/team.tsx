import Section from "../section";

import { cn } from "@/lib/utils";
import { PortableText } from "@portabletext/react";
import CustomImage from "../custom-image";

function Team({ module }: any) {
  const metaData = module?.metaData || {};
  const team = module?.team;

  return (
    <Section sectionData={metaData}>
      <div className="flex flex-col md:gap-y-6">
        {team?.map(({ name, bio, photo, professions }: any, index: number) => (
          <TeamCard
            name={name}
            photo={photo}
            professions={professions}
            bio={bio}
            key={name}
            isInverted={index % 2 === 0}
          />
        ))}
      </div>
    </Section>
  );
}

function TeamCard({ name, photo, professions, bio, isInverted }: any) {
  // const href = slug?.current || "/";

  return (
    <figure className="justify-around items-center sm:items-start flex relative py-3 sm:flex-row flex-col rounded-md">
      <div
        className={cn(
          "aspect-[4/5] w-full sm:w-[25vw] relative",
          isInverted ? "sm:order-1" : "sm:order-2",
        )}
      >
        <CustomImage
          imageOBJ={photo}
          className={cn("!object-contain saturate-0 rounded-md")}
        />
      </div>

      <figcaption
        className={cn(
          "self-center text-muted-foreground flex flex-col md:gap-y-3 sm:gap-y-2 gap-y-1 md:w-2/3 w-full max-w-[30rem] sm:p-6 py-6",
          isInverted ? "sm:order-2" : "sm:order-1",
        )}
      >
        <h3 className="lg:text-4xl md:text-3xl text-2xl font-serif">{name}</h3>
        <p className="text-sm md:text-base font-sans text-accent">
          {professions?.join(", ")}
        </p>
        <div className="prose-sm prose-p:text-sm prose-p:font-sans">
          <PortableText value={bio} />
        </div>
      </figcaption>
      <div className="bg-muted w-full absolute top-1/2 -translate-y-1/2 left-0 md:h-[20vw] h-[35vw] -z-10"></div>
    </figure>
  );
}

export default Team;
