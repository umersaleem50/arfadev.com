import { urlFor } from "@/sanity/lib/image";
import { SanityImageProps } from "./SanityImage";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export interface Author {
  photo: SanityImageProps;
  name: string;
}

export interface AuthorProps {
  author: Author;
  postedAt?: Date;
}

function Author({ author, postedAt }: AuthorProps) {
  return (
    <div className="flex items-center space-x-4 mb-6 col-start-1 col-span-9">
      <Avatar>
        {author?.photo.image && (
          <AvatarImage
            alt={author?.photo?.alt}
            src={urlFor(author?.photo?.image).width(70).height(70).url()}
            height={70}
            width={70}
          />
        )}
        <AvatarFallback>AN</AvatarFallback>
      </Avatar>
      <div>
        {author.name && (
          <p className="text-lg font-light font-sans text-muted-foreground">
            {author.name}
          </p>
        )}
        {postedAt && (
          <p className="text-sm font-light font-sans col-start-1 col-span-8 text-muted-foreground">
            Posted on {new Date(postedAt).toDateString()}
          </p>
        )}
      </div>
    </div>
  );
}

export default Author;
