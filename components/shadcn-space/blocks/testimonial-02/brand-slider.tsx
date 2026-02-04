"use client";

import { Marquee } from "@/components/shadcn-space/animations/marquee";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export interface BrandList {
  image: string;
  name: string;
  lightimg: string;
}

function BrandSlider({ brandList }: { brandList: BrandList[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef}>
      <div className="py-6 md:py-10">
        <div className="max-w-7xl mx-auto sm:px-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            className="flex flex-col gap-6 pt-12 border-t border-border"
          >
            <p className="text-base font-normal sm:px-2 px-10 text-accent dark:text-primary text-center font-sans">
              We were honored to be part of your journey.
            </p>
            {brandList && brandList.length > 0 && (
              <div className="py-4">
                <Marquee pauseOnHover className="[--duration:20s] p-0">
                  {brandList.map((brand, index) => (
                    <div key={index}>
                      <Image
                        src={brand.image}
                        alt={brand.name}
                        className="mr-6 lg:mr-20 dark:hidden"
                        height={144}
                        width={144}
                      />
                      <Image
                        src={brand.lightimg}
                        alt={brand.name}
                        className="hidden dark:block mr-12 lg:mr-20"
                        height={144}
                        width={144}
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default BrandSlider;
