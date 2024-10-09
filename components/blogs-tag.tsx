"use client";
import React, { useState } from "react";
import { Badge } from "./ui/badge";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function BlogsTags({ posts }: any) {
  const searchParams = useSearchParams();
  const activeTags = searchParams.getAll("tags") || [];
  const allTags = Array.from(new Set(posts.flatMap((post: any) => post.tags)));

  //   const toggleTag = (tag: string) => {
  //     setSelectedTags((prev) =>
  //       prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
  //     );
  //   };

  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {allTags.map((tag: any, key: number) => (
        <Link href={`?tags=${tag}`}>
          <Badge
            key={key}
            variant={activeTags.includes(tag) ? "default" : "outline"}
            className="cursor-pointer"
            //   onClick={() => toggleTag(tag)}
          >
            {tag}
          </Badge>
        </Link>
      ))}
    </div>
  );
}

export default BlogsTags;
