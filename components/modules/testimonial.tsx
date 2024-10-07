import React from "react";
import Section from "../section";
import Signatures from "../svgs/signatures";
import PlayButton from "../svgs/play-button";
import CustomImage from "../custom-image";
import { urlFor } from "@/sanity/lib/image";

interface IClient {
  name: string;
  profession: string;
  photo: any;
}

function Testimonials({ module }: any) {
  const metaData = module?.metaData || {
    miniTitle: "2. Testimonials",
    title: "What our clients says about us;",
    subtitle:
      "Everything we do is focused on generating more qualified cases for your law firm.",
  };

  const feedback =
    module?.feedback || "Untitled! Please enter the feedback of client.";

  const client: IClient = module?.client || {
    name: "Untitled Name!",
    profession: "No Profession",
    photo: null,
  };

  return (
    <Section sectionHeader={metaData}>
      <figure className="max-w-container container grid grid-cols-3 py-12 px-24 gap-x-24 h-[25rem] bg-secondary">
        <div className="col-span-1 h-[26rem] -translate-y-1/4 relative">
          {client?.photo && (
            <CustomImage
              src={urlFor(client?.photo?.asset).url()}
              imageOBJ={client?.photo?.asset}
              width={client?.photo?.width}
              height={client?.photo.height}
              alt={client?.photo?.alt}
            />
          )}
        </div>
        <figcaption className="font-serif  text-2xl leading-loose text-background col-span-2 relative flex items-end flex-col gap-y-8">
          <p className="italic">{feedback}</p>
          <Signatures className="absolute top-0 left-0 -translate-x-1/4 translate-y-1/3 z-10 pointer-events-none" />
          <div className="flex gap-x-6 items-center">
            <div className="flex items-end flex-col gap-y-2">
              <p className="text-xl font-medium font-sans text-primary">
                {client?.name}
              </p>
              <p className="text-sm font-sans dark:text-foreground/80">
                {client?.profession}
              </p>
            </div>
            <PlayButton />
          </div>
        </figcaption>
      </figure>
    </Section>
  );
}

export default Testimonials;
