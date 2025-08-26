import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Section from "../section";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CustomImage from "../custom-image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { PortableText } from "@portabletext/react";
import { portableSimple } from "../portable-stucture/portable-simple";

function Team({ module }: any) {
  const metaData = module?.metaData || {};
  const team = module?.team;

  return (
    <Section sectionData={metaData}>
      <div className="flex flex-col md:gap-y-6">
        {team?.map(
          (
            { _id, name, email, bio, contact, photo, phone, professions },
            index
          ) => (
            <TeamCard
              name={name}
              photo={photo}
              professions={professions}
              bio={bio}
              key={_id}
              isInverted={index % 2 === 0}
            />
          )
        )}
      </div>
    </Section>
  );
}

function TeamCard({ name, photo, professions, slug, bio, isInverted }: any) {
  const href = slug?.current || "/";

  return (
    <figure className="justify-around flex relative py-3">
      <div
        className={cn(
          "aspect-[4/5] w-[25vw] relative",
          isInverted ? "order-1" : "order-2"
        )}
      >
        <CustomImage
          imageOBJ={photo}
          className={cn("!object-contain saturate-0")}
        />
      </div>

      <figcaption
        className={cn(
          "self-center text-muted-foreground flex flex-col md:gap-y-3 sm:gap-y-2 gap-y-1 w-2/3 max-w-[30rem] p-6",
          isInverted ? "order-2" : "order-1"
        )}
      >
        <h3 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-serif">
          {name}
        </h3>
        <p className="sm:text-sm text-xs md:text-base font-sans text-accent">
          {professions?.join(", ")}
        </p>
        <div className="prose-sm prose-p:text-xs sm:prose-p:text-sm prose-p:font-sans">
          <PortableText value={bio} />
        </div>
      </figcaption>
      <div className="bg-muted w-full absolute top-1/2 -translate-y-1/2 left-0 md:h-[20vw] h-[35vw] -z-10"></div>
    </figure>
  );
}

export default Team;
