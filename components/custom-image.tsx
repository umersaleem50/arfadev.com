import { urlFor } from "@/sanity/lib/image";
import Image, { ImageProps } from "next/image";
import React from "react";

interface ICustomeImageProps extends ImageProps {
  imageOBJ: any;
}

function CustomImage({
  imageOBJ,
  placeholder,
  height,
  width,
  objectFit,
  className,
  priority = false,
  loading = "lazy",
}: ICustomeImageProps) {
  const blurDataURL = urlFor(imageOBJ?.asset || imageOBJ)
    .width(20)
    .height(20)
    .blur(20)
    .url();
  const imageOptions: any = {
    alt: imageOBJ?.alt || "Please enter alt.",
    style: { objectFit: objectFit || "fill" },
  };
  if (width && height) {
    imageOptions["width"] = width;
    imageOptions["height"] = height;
  } else {
    imageOptions["fill"] = true;
  }

  if (loading === "eager" && priority) {
    imageOptions["loading"] = "eager";
    imageOptions["priority"] = true;
  }

  return (
    <Image
      {...imageOptions}
      className={className}
      src={urlFor(imageOBJ?.asset || imageOBJ).url()}
      blurDataURL={blurDataURL}
      placeholder={placeholder || "blur"}
      quality={90}
      sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 40vw"

      // layout="responsive"
    />
  );
}

export default CustomImage;
