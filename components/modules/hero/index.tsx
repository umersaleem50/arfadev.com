"use client";

import { Button } from "@/components/ui/button";
import { MessageCircleMore } from "lucide-react";
import Link from "next/link";
import BtnCTA from "../../BtnCTA";

export default function LandingHero() {
  return (
    <section className="z-10 h-screen flex items-center justify-center">
      <div className="flex items-center md:flex-col flex-row gap-4 w-full mx-auto">
        <div className="mx-auto max-w-4xl px-4 md:px-6 text-left mt-8 flex flex-col items-center gap-y-12 justify-center self-center">
          <h1
            className={
              "text-3xl sm:text-5xl md:text-7xl font-serif text-center leading-normal capitalize font-light text-muted-foreground"
            }
          >
            Need help with
            <br />
            <u className="text-accent dark:text-primary">Frontends?</u>
          </h1>
          <div className="flex flex-col gap-y-8 items-center">
            <p className="w-full max-w-md text-xs sm:text-base font-sans whitespace-normal leading-relaxed! text-center text-muted-foreground">
              We are a team of independent{" "}
              <u className="text-accent dark:text-primary">
                frontend developers
              </u>{" "}
              that works with developer teams around the world to build scalable
              and modren UIs.
            </p>
            <div className="flex gap-x-4">
              <BtnCTA>Hire us now!</BtnCTA>
              <Button asChild variant={"outline"}>
                <Link href={"https://wa.link/z5w0p4"}>
                  <MessageCircleMore /> Chat Now!
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
