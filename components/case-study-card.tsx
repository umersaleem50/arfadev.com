import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function CaseStudyCard() {
  return (
    <Link href="/">
      <figure className="flex flex-row gap-x-4 group">
        <div className="h-28 w-28 min-w-28 relative">
          <Image src={"/card.jpg"} fill alt="card" />
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
