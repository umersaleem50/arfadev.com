import Link from "next/link";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import CustomImage from "./custom-image";
import Author from "./author";
import TimeAgo from "javascript-time-ago";
import es from "javascript-time-ago/locale/es";

TimeAgo.addLocale(es);

function RelatedBlogCard({ slug, cover, author, publishedAt, title }: any) {
  //   const timeAgo = new TimeAgo("en-US");
  return (
    <Link href={slug?.current || "/not-found"}>
      <figure className="relative w-full h-[400px] max-w-[500px] flex">
        {cover && (
          <CustomImage
            src={urlFor(cover?.asset).url()}
            fill
            alt={cover?.alt}
            imageOBJ={cover?.asset}
          />
        )}
      </figure>
      <div className="">
        <h3>{title}</h3>
        <Author postedAt={publishedAt} author={author} />
        <time>{new Date(publishedAt).toDateString()}</time>
      </div>
    </Link>
  );
}

export default RelatedBlogCard;
