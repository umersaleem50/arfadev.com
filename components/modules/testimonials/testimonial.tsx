import AnimatedContainer from "@/components/AnimatedContainer";
import SanityImage from "@/components/SanityImage";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import { Ref } from "react";
import { type TestimonialProps } from "./types";

export default function Testimonial({
  testimonials,
  sectionRef,
  isInView,
}: {
  testimonials: TestimonialProps[];
  sectionRef: Ref<HTMLDivElement>;
  isInView: boolean;
}) {
  return (
    <>
      <div className="max-w-7xl mx-auto sm:px-16 px-4 pt-12" ref={sectionRef}>
        <div className="">
          <AnimatedContainer
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            className="pt-12 pb-8"
          >
            <Carousel>
              <CarouselContent>
                {testimonials.map(({ author, image, quote, role }, index) => (
                  <CarouselItem key={index}>
                    <div className="grid grid-cols-12 gap-6 items-center">
                      <div className="lg:col-span-8 col-span-12 flex sm:flex-row flex-col sm:gap-10 gap-6 lg:pe-12">
                        <div className="shrink-0 flex items-start">
                          <Image
                            src="/icons/icon-quote.svg"
                            alt="muted quote"
                            className="dark:hidden"
                            height={60}
                            width={60}
                          />
                          <Image
                            src="/icons/icon-quote-white.svg"
                            alt="muted quote"
                            className="hidden dark:block"
                            height={60}
                            width={60}
                          />
                        </div>
                        <div className="flex flex-col gap-12">
                          <p className="sm:text-4xl text-xl text-muted-foreground font-sans font-light">
                            {quote}
                          </p>
                          <div>
                            <p className="text-xl font-medium font-serif text-accent dark:text-primary">
                              {author}
                            </p>
                            <p className="text-sm text-muted-foreground font-sans">
                              {role}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-4 col-span-12">
                        <div className="rounded-xl overflow-hidden">
                          <SanityImage
                            image={image}
                            width={500}
                            height={500}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className={"-top-20 left-auto right-12"} />
              <CarouselNext className={"-top-20 right-0"} />
            </Carousel>
          </AnimatedContainer>
        </div>
      </div>
    </>
  );
}
