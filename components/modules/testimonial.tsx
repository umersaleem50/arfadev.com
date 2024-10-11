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
    <Section sectionData={metaData}>
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
            :
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

export const TestimonialsPortable = ({ module }: any) => {
  const feedback =
    module?.feedback || "Untitled! Please enter the feedback of client.";

  const client: IClient = module?.client || {
    name: "Untitled Name!",
    profession: "No Profession",
    photo: null,
  };

  return (
    <figure className="max-w-container container grid grid-cols-3 px-6 py-3 gap-x-12 bg-secondary items-center relative border border-border">
      <div className="col-span-1 items-center">
        <p className="text-sans text-sm">Client's Review</p>
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
      <figcaption className="font-serif  text-2xl leading-loose text-background col-span-2 relative flex items-start flex-col ">
        <p className="italic text-2xl font-semibold">{feedback}</p>
        {/* <Signatures className="absolute top-0 left-0 -translate-x-1/4 translate-y-1/3 z-10 pointer-events-none" /> */}
        <div className="flex flex-col items-start">
          {/* <div className="flex items-start flex-col"> */}
          <p className="text-xl !my-1 font-medium font-sans text-primary">
            {client?.name}
          </p>

          <p className="text-sm !my-0 font-sans dark:text-foreground/80 ">
            {client?.profession}
          </p>
          {/* </div> */}
        </div>
      </figcaption>
    </figure>
  );
};

export default Testimonials;
