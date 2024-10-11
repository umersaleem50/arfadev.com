import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import CustomImage from "./custom-image";
import { cn } from "@/lib/utils";

function BlogCard({
  seo,
  title,
  cover,
  _updatedAt,
  author,
  slug,
  content = [],
  description,
  index = 0,
}: {
  index: number;
  seo?: any;
  title: string;
  cover?: any;
  _updatedAt?: any;
  author?: any;
  slug?: { current: string };
  content?: any;
  description?: string;
}) {
  return (
    <Link
      className="group sm:flex focus:outline-none"
      href={slug?.current || "/"}
    >
      <div
        className={cn(
          "shrink-0 relative overflow-hidden h-[300px] sm:w-[300px] sm:h-[450px] w-full group"
        )}
      >
        {/* {cover && (
          <CustomImage
            className="size-full absolute top-0 start-0 object-cover group-hover:scale-110 transition-all duration-500 ease-in-out"
            src={urlFor(cover?.asset).url()}
            alt={cover?.alt}
            fill
            objectFit={cover.objectFit}
            imageOBJ={cover?.asset}
          />
        )} */}
        <Image
          src={
            "https://images.pexels.com/photos/13871553/pexels-photo-13871553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt={"test"}
          height={450}
          width={300}
          className="object-cover"
        />
      </div>

      <div className="sm:w-[400px]">
        <div className="p-4 flex flex-col h-full sm:p-6">
          <div className="mb-3">
            <p className="inline-flex items-center gap-1.5 py-1.5 px-3 text-xs bg-secondary text-secondary-foreground font-sans">
              Business
            </p>
          </div>
          <h3 className="text-lg sm:text-2xl font-bold font-serif hover:text-primary">
            {title || "Preline becomes an official Instagram Marketing Partner"}
          </h3>
          <p className="mt-2 font-sans text-muted-foreground line-clamp-3">
            {description ||
              "Discover premium handmade leather shoes for men at Dori's Shoes, perfect for special occasions. Elevate your style with our timeless craftsmanship and unmatched quality."}
          </p>

          <div className="mt-5 sm:mt-auto">
            {/* <!-- Avatar --> */}
            <div className="flex items-center">
              <div className="shrink-0 relative w-10 h-10">
                <Image
                  className="size-[46px] rounded-full object-cover"
                  src={"/chishti.jpg"}
                  alt="Avatar"
                  fill
                />
              </div>
              <div className="ms-2.5 sm:ms-4">
                <h4 className="font-semibold font-serif">Aaron Larsson</h4>
                <p className="text-xs font-sans">Feb 15, 2021</p>
              </div>
            </div>
            {/* <!-- End Avatar --> */}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
