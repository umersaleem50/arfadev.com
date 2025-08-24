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

function Team({ module }) {
  const metaData = module?.metaData || {};
  const team = module?.team;

  return (
    <Section sectionData={metaData}>
      {team?.map(({ name, email, bio, contact, photo, phone, professions }) => (
        <TeamCard name={name} photo={photo} professions={professions} />
      ))}
    </Section>
  );
}

function TeamCard({ name, photo, professions, slug }: any) {
  const href = slug?.current || "/";
  return (
    <div className="p-3 sm:p-4 border border-secondary/40 flex flex-col gap-4 group hover:bg-primary/30 hover:cursor-pointer justify-start items-start ">
      <div className="relative bg-primary">
        <CustomImage imageOBJ={photo} />
      </div>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-secondary ">
        {name}
      </h3>
      <p className="text-sm sm:text-base font-sans text-secondary">
        {professions.join(", ")}
      </p>
      <Link
        href={href}
        scroll={false}
        className={cn(
          buttonVariants({
            variant: "outline",
            className: "border-secondary text-secondary",
          })
        )}
      >
        Open Profile <ArrowUpRight className="fill-current" />
      </Link>
    </div>
  );
}

export default Team;
