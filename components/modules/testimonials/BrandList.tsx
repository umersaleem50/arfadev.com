import AnimatedContainer from "@/components/AnimatedContainer";
import { Marquee } from "@/components/marquee";

import Image from "next/image";
import { Ref } from "react";

export interface BrandList {
  image: string;
  name: string;
  lightimg: string;
}

function BrandSlider({
  brandList,
  sectionRef,
  isInView,
}: {
  brandList: BrandList[];
  sectionRef: Ref<HTMLDivElement>;
  isInView: boolean;
}) {
  return (
    <div className="py-6 md:py-10" ref={sectionRef}>
      <div className="max-w-7xl mx-auto sm:px-16 px-4">
        <AnimatedContainer
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          className="flex flex-col gap-6 pt-12 border-t border-border"
        >
          <p className="text-base font-normal sm:px-2 px-10 text-accent dark:text-primary text-center font-sans">
            We were honored to be part of your journey.
          </p>
          {brandList?.length > 0 && (
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
        </AnimatedContainer>
      </div>
    </div>
  );
}

export default BrandSlider;
