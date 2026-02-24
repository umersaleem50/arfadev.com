import Author from "@/components/author";
import SanityImage from "@/components/SanityImage";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { BlogCard } from "./types";

function LargeBlogCard({
  cover,
  title,
  _updatedAt,
  author,
  slug,
  description,
  tags,
}: BlogCard) {
  // const { title, description, updatedAt, createdAt, slug } = data;
  return (
    <div className="w-full group flex flex-col transition duration-300 group ">
      <div className="aspect-w-16 aspect-h-11 relative h-[12rem] sm:h-[20rem] md:h-[32rem] rounded-md overflow-hidden">
        {cover && (
          <SanityImage
            image={cover}
            fill
            className="w-full object-cover hover:scale-105 transition-transform duration-300"
          />
        )}
      </div>

      <Link href={`/blogs/${slug?.current ?? ""}`}>
        <div className="my-3 sm:my-4 md:my-5 lg:md-6">
          {_updatedAt && (
            <time className="text-sm sm:text-base font-sans text-white/70">
              {new Date(_updatedAt).toDateString()}
            </time>
          )}
          <h3 className="text-xl md:text-2xl lg:text-3xl underline text-foreground hover:underline group-hover:text-accent dark:group-hover:text-primary transition-colors font-light">
            {title}
          </h3>
          <p className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-muted-foreground line-clamp-3 font-sans">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pb-3 sm:pb-4 md:pb-5 lg:pb-6">
          {tags?.map((tag: string) => {
            return (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            );
          })}
        </div>

        <Author author={author} postedAt={_updatedAt} />
      </Link>
    </div>
  );
}
