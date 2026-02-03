"use client";

import BtnCTA from "../BtnCTA";
import CircularGallery, { CircularGalleryProps } from "../CircularGallery";

export interface LandingHeroProps {
  cta: string;
}

const defaultItems = [
  {
    image:
      "https://cdn.dribbble.com/userupload/17730954/file/original-1ca571d72aed46b341defcb0bf9a18e1.png?resize=1024x768&vertical=center",
    text: "Doneze",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/8817245/file/original-fe6d08b5e2b3f7fb2fad97cfbe501ac3.png?resize=1024x768&vertical=center",
    text: "Bolt",
  },
  {
    image: "/assets/coach-pulse.jpg",
    text: "Coach Pulse",
  },
  {
    image: "/assets/cayus-ai.jpg",
    text: "Cayus AI",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/46084065/file/cd785c8cc61b8647d7c4a2ef5fb5150d.jpg?resize=1024x768&vertical=center",
    text: "JD",
  },
  {
    image: "/assets/coach-pulse-dark.jpg",
    text: "Coach Pulse",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/38640245/file/original-15aac0b678e3534477fa01565d81f455.png?resize=1024x768&vertical=center",
    text: "Toks.",
  },

  ,
];

export function LandingHero() {
  return (
    <>
      <main className="z-10">
        <section>
          <div className="relative overflow-hidden pt-2 md:pt-4">
            {/* Constrained content for the hero text */}
            <div className="flex items-center md:flex-col flex-row gap-4">
              <div className="mx-auto max-w-7xl md:px-6 text-left mt-8 flex md:flex-row flex-col gap-x-8 items-center gap-y-4 md:gap-y-0">
                <h1
                  className={
                    "text-4xl sm:text-5xl md:text-6xl font-serif text-center leading-tight capitalize"
                  }
                >
                  We develop <u className="text-primary">lastinggg </u>
                  <br />
                  <span>User Experiences!</span>
                </h1>
                <div className="flex flex-col md:items-start gap-y-4 items-center">
                  <p className="w-[30rem] text-sm sm:text-base font-sans whitespace-normal leading-normal text-center md:text-left text-muted-foreground">
                    We help <u>startups</u> and <u>SaaS companies</u> with{" "}
                    <span className="text-accent dark:text-primary">
                      web app
                    </span>
                    ,{" "}
                    <span className="text-accent dark:text-primary">
                      landing pages
                    </span>
                    , and{" "}
                    <span className="text-accent dark:text-primary">
                      mobile app
                    </span>{" "}
                    development.
                  </p>
                  <BtnCTA>Send Us Email</BtnCTA>
                </div>
              </div>
            </div>

            <div className="mt-12 w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]">
              <CircularGallery
                items={defaultItems as CircularGalleryProps["items"]}
                bend={5}
                textColor="#ffffff"
                borderRadius={0.03}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
