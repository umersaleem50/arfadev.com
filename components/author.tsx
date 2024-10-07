import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { urlFor } from "@/sanity/lib/image";

function Author({ author }: any) {
  return (
    <div className="flex items-center space-x-4 mb-6 col-start-1 col-span-9">
      <Avatar>
        {author?.photo && (
          <AvatarImage
            alt={author?.photo?.alt}
            src={urlFor(author?.photo?.asset).width(70).height(70).url()}
          />
        )}
        <AvatarFallback>AN</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-lg font-light font-sans ">
          {author && author?.name}
        </p>
        <p className="text-sm font-light font-sans col-start-1 col-span-8 text-primary">
          Posted on August 24, 2023
        </p>
      </div>
    </div>
  );
}

export default Author;
