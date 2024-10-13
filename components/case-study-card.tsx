import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function CaseStudyCard() {
  return (
    <Link href="/">
      <figure className="flex flex-col gap-y-2 md:flex-row gap-x-4 group ">
        <div className="md:h-28 h-40 w-full md:w-28 min-w-28 relative">
          <Image src={"/card.jpg"} fill className="object-cover" alt="card" />
        </div>
        <figcaption className=" flex flex-col items-start gap-y-2">
          <h3 className="text-xl font-semibold font-serif group-hover:text-primary transition-colors duration-150">
            Learn how we helped chishti law firm have 3x traffic.
          </h3>
          <p className="text-sm font-sans text-muted-foreground">
            He got 300 cases in just first week of the launch of the website.
          </p>
        </figcaption>
      </figure>
    </Link>
  );
}

export default CaseStudyCard;
