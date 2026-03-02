import { cn } from "@/lib/utils";
import Link from "next/link";
import Author from "../../author";

import SanityImage from "../../SanityImage";
import { type BlogCard } from "./types";

function BlogCard({
  title,
  _createdAt,
  author,
  slug,
  description,
  tags,
  cover_vertical,
}: BlogCard) {
  return (
    <Link
      className="group sm:flex focus:outline-none bg-muted rounded-md"
      href={`/blogs/${slug?.current}` || "/not-found"}
    >
      <div
        className={cn(
          "shrink-0 relative overflow-hidden h-[300px] sm:w-[300px] sm:h-[450px] w-full group rounded-md",
        )}
      >
        {cover_vertical ? (
          <SanityImage
            className="size-full absolute top-0 start-0 group-hover:scale-110 transition-all duration-500 ease-in-out object-cover "
            alt={cover_vertical?.alt}
            fill
            image={cover_vertical}
          />
        ) : null}
      </div>

      <div className="sm:w-[400px]">
        <div className="p-4 flex flex-col h-full sm:p-6">
          <div className="mb-3 space-x-2">
            {tags?.map((tag, key) => {
              return (
                <p
                  key={key}
                  className="inline-flex items-center gap-1.5 py-1.5 px-3 text-xs bg-secondary text-secondary-foreground font-sans"
                >
                  {tag}
                </p>
              );
            })}
          </div>
          <h3 className="text-2xl font-medium font-serif text-accent dark:text-primary mb-3">
            {title}
          </h3>
          <p className="mt-2 text-base font-sans text-muted-foreground line-clamp-4">
            {description}
          </p>

          <div className="mt-5 sm:mt-auto">
            {/* <!-- Avatar --> */}
            <div className="flex items-center">
              <Author author={author} postedAt={_createdAt} />
            </div>
            {/* <!-- End Avatar --> */}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
