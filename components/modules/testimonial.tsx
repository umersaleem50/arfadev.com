import React from "react";
import Section from "../section";
import Image from "next/image";

function Testimonials({ module }: any) {
  return (
    <Section
      options={{
        section: "2. Testimonials",
        title: "What our clients says about us;",
        subtitle:
          "Everything we do is focused on generating more qualified cases for your law firm.",
      }}
    >
      <figure className="max-w-container container bg-foreground grid grid-cols-3 py-12 px-24 gap-x-24 h-[25rem]">
        <div className="col-span-1 h-[26rem] -translate-y-1/4 relative">
          <Image
            src="/chishti.jpg"
            fill
            alt="client"
            className="object-cover"
          />
        </div>
        <figcaption className="font-serif text-2xl leading-loose text-background col-span-2">
          Partnering with Arfa Developers has been a game-changer for our law
          firm. Their expertise in website design and development has
          transformed our online presence. From the initial consultation to the
          final launch, their team demonstrated a deep understanding of the
          legal industry and our specific needs.
        </figcaption>
      </figure>
    </Section>
  );
}

export default Testimonials;
