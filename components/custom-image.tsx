import { purifyString } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import Image, { ImageProps } from "next/image";
import React from "react";

interface ICustomeImageProps extends Omit<ImageProps, "src" | "alt"> {
  imageOBJ: any;
  alt?: string;
}

function CustomImage({
  imageOBJ,
  placeholder = "blur", // defaulting to "blur"
  height,
  width,
  objectFit = "fill", // default value for objectFit
  className,
  priority = false,
  loading = "lazy",
  alt = "Please enter alt", // default alt text
  ...rest // using rest to catch remaining ImageProps
}: ICustomeImageProps) {
  const blurDataURL = urlFor(imageOBJ?.asset || imageOBJ)
    .width(20)
    .height(20)
    .blur(20)
    .url();

  const imageUrl = urlFor(imageOBJ?.asset || imageOBJ).url();

  const imageOptions: any = {
    src: imageUrl,
    alt: alt,
    className: className,
    blurDataURL: blurDataURL,
    placeholder: placeholder,
    loading: priority ? "eager" : loading, // eager loading if priority is true
    priority: priority,
    style: { objectFit: purifyString(objectFit) },
    quality: 90,
    sizes: "(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 40vw",
    ...rest,
  };

  if (width && height) {
    imageOptions["width"] = width;
    imageOptions["height"] = height;
  } else {
    imageOptions["fill"] = true; // default to fill if width/height not provided
  }

  return <Image {...imageOptions} />;
}

export default CustomImage;
