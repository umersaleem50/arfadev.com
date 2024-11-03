"use client";
// ---------
import "react-multi-carousel/lib/styles.css";
// ---------
import Carousel from "react-multi-carousel";
// ---------
import { responsive } from "@/lib/utils";
// ---------
import CustomImage from "./custom-image";

function GallerySlider({ content }: any) {
  return (
    <Carousel
      swipeable
      showDots={true}
      autoPlay={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      customTransition="all 1s"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="mt-8"
      className="w-full"
    >
      {content.map((image: any, i: number) => {
        return (
          <div
            className="h-[20rem] sm:h-[28rem] md:h-[80vh] lg:h-[80vh] w-auto relative z-0 border border-secondary/40"
            key={i}
          >
            <CustomImage
              className="w-full object-cover pointer-events-none"
              alt={image?.alt}
              fill
              imageOBJ={image}
            />
          </div>
        );
      })}
    </Carousel>
  );
}

export default GallerySlider;
