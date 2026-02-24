"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { type TestimonialProps } from "./types";

export default function Testimonial({
  testimonials,
}: {
  testimonials: TestimonialProps[];
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef}>
      <div className="max-w-7xl mx-auto sm:px-16 px-4 pt-12">
        <div className="">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            className="pt-12 pb-8"
          >
            <Carousel>
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="grid grid-cols-12 gap-6 items-center">
                      <div className="lg:col-span-8 col-span-12 flex sm:flex-row flex-col sm:gap-10 gap-6 lg:pe-12">
                        <div className="shrink-0 flex items-start">
                          <img
                            src="/icons/icon-quote.svg"
                            alt="muted quote"
                            className="dark:hidden"
                          />
                          <img
                            src="/icons/icon-quote-white.svg"
                            alt="muted quote"
                            className="hidden dark:block"
                          />
                        </div>
                        <div className="flex flex-col gap-12">
                          <p className="sm:text-4xl text-xl text-muted-foreground font-sans font-light">
                            {testimonial.quote}
                          </p>
                          <div>
                            <p className="text-xl font-medium font-serif text-accent dark:text-primary">
                              {testimonial.author}
                            </p>
                            <p className="text-sm text-muted-foreground font-sans">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-4 col-span-12">
                        <div className="rounded-xl overflow-hidden">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
