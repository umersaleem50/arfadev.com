import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image, { ImageProps } from "next/image";
import React from "react";

interface ICustomeImageProps extends ImageProps {
  imageOBJ: SanityImageSource;
}

function CustomImage({
  imageOBJ,
  placeholder,
  height,
  width,
  objectFit,
  className,
}: ICustomeImageProps) {
  const blurDataURL = urlFor(imageOBJ).width(20).height(20).blur(20).url();
  const imageOptions: any = {
    alt: "Please enter alt.",
    style: { objectFit: objectFit || "fill" },
  };
  if (width && height) {
    imageOptions["width"] = width;
    imageOptions["height"] = height;
  } else {
    imageOptions["fill"] = true;
  }

  return (
    <Image
      {...imageOptions}
      className={className}
      src={urlFor(imageOBJ).url()}
      blurDataURL={blurDataURL}
      placeholder={placeholder || "blur"}
      quality={90}
      sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 60vw"
      loading="lazy"
      // layout="responsive"
    />
  );
}

export default CustomImage;
