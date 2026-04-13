import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export interface Author {
  photo: SanityImageSource;
  name: string;
}

export interface AuthorProps {
  author: Author;
  postedAt?: Date;
}

function Author({ author, postedAt }: AuthorProps) {
  const avatarImage = urlFor(author.photo).width(70).height(70).url();
  return (
    <div className="flex items-center space-x-4 mb-6 col-start-1 col-span-9">
      <Avatar>
        <AvatarImage src={avatarImage}></AvatarImage>

        <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
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
