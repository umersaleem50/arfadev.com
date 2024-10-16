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
      <figure className="max-w-[85rem] grid md:grid-cols-3 grid-cols-1 items-center md:items-start gap-y-8 md:gap-y-0 md:py-12 lg:px-24 md:px-8 px-6 lg:gap-x-24 md:gap-x-16 bg-secondary sm:py-10 py-8">
        <div className="col-span-1 lg:-translate-y-1/4 md:-translate-y-0 relative">
          {client?.photo && (
            <CustomImage
              imageOBJ={client?.photo}
              width={250}
              height={400}
              alt={client?.photo?.alt}
            />
          )}
        </div>
        <figcaption className="font-serif text-2xl lg:leading-loose md:leading-normal text-background col-span-2 relative flex items-end flex-col gap-y-8">
          <p className="italic">{feedback}</p>
          <Signatures className="absolute top-0 left-0 translate-y-1/2 md:-translate-x-1/4 md:translate-y-1/3 z-10 pointer-events-none" />
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

export const TestimonialsPortable = ({ module }: any) => {
  const feedback =
    module?.feedback || "Untitled! Please enter the feedback of client.";

  const client: IClient = module?.client || {
    name: "Untitled Name!",
    profession: "No Profession",
    photo: null,
  };

  return (
    <figure className="max-w-container container grid md:grid-cols-3 grid-cols-1 px-6 py-6 lg:gap-x-12 md:gap-x-8 gap-x-6 bg-secondary items-center relative border border-border">
      <div className="col-span-1 md:items-center items-start">
        <p className="text-sans text-sm">Client's Review</p>
        {client?.photo && (
          <CustomImage
            imageOBJ={client?.photo}
            width={200}
            height={400}
            alt={client?.photo?.alt}
          />
        )}
      </div>
      <figcaption className="font-serif md:text-2xl text-xl lg:leading-loose leading-none md:leading-normal text-background md:col-span-2 col-span-1 relative flex items-start flex-col ">
        <p className="italic md:text-2xl text-xl font-semibold">{feedback}</p>
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
