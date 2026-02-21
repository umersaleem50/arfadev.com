import { purifyString } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image, { ImageProps } from "next/image";

export interface SanityImageObject {
  asset: SanityImageSource;
}

export interface SanityImageProps extends Omit<ImageProps, "src" | "alt"> {
  image: SanityImageSource;
  alt?: string;
}

function SanityImage({
  image,
  placeholder = "blur", // defaulting to "blur"
  height,
  width,
  objectFit = "fill", // default value for objectFit
  className,
  priority = false,
  loading = "lazy",
  alt = "Please enter alt", // default alt text
  ...rest // using rest to catch remaining ImageProps
}: SanityImageProps) {
  if (!image) return <NoImage />;

  const blurDataURL = urlFor(image).width(20).height(20).blur(20).url();

  const imageUrl = urlFor(image).url();

  const imageOptions: ImageProps = {
    src: imageUrl,
    alt: alt ?? "",
    className: className,
    blurDataURL: blurDataURL,
    placeholder: placeholder,
    loading: priority ? "eager" : loading, // eager loading if priority is true
    priority: priority,
    style: { objectFit: purifyString(objectFit) as any },
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

  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image {...imageOptions} />;
}

function NoImage() {
  return (
    <div className="h-full w-full bg-gray-300 border-border flex items-center justify-center">
      <p className="font-sans text-base">Image Not Found!</p>
    </div>
  );
}

export default SanityImage;
