import { cn } from "@/lib/utils";
import Link from "next/link";
import Author from "./author";
import CustomImage from "./custom-image";
import { Badge } from "./ui/badge";

function BlogCard({
  title,
  cover,
  _createdAt,
  author,
  slug,
  description,
  tags,
  cover_vertical,
}: {
  title: string;
  cover?: any;
  _createdAt?: any;
  author?: any;
  slug?: { current: string };
  content?: any;
  description?: string;
  tags?: string[];
  cover_vertical: any;
}) {
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
        {cover_vertical && (
          <CustomImage
            className="size-full absolute top-0 start-0 group-hover:scale-110 transition-all duration-500 ease-in-out object-cover "
            alt={cover_vertical?.alt}
            fill
            objectFit={"cover"}
            imageOBJ={cover_vertical}
          />
        )}
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
              {/* <div className="shrink-0 relative w-10 h-10">
                <Image
                  className="size-[46px] rounded-full object-cover"
                  src={"/chishti.jpg"}
                  alt="Avatar"
                  fill
                />
              </div>
              <div className="ms-2.5 sm:ms-4">
                <h4 className="font-semibold font-serif">{author?.name}</h4>
                <p className="text-xs font-sans">
                  {new Date(_createdAt).toDateString()}
                </p>
              </div> */}
              <Author author={author} postedAt={_createdAt} />
            </div>
            {/* <!-- End Avatar --> */}
          </div>
        </div>
      </div>
    </Link>
  );
}

export type ILargeBlogCard = {
  cover: any;
  title: string;
  description: string;
  slug: { current: string };
  author: any;
  _updatedAt: string;
  tags?: string[];
};

export function LargeBlogCard({
  cover,
  title,
  _updatedAt,
  author,
  slug,
  description,
  tags,
}: ILargeBlogCard) {
  // const { title, description, updatedAt, createdAt, slug } = data;
  return (
    <div className="w-full group flex flex-col transition duration-300 group ">
      <div className="aspect-w-16 aspect-h-11 relative h-[12rem] sm:h-[20rem] md:h-[32rem] rounded-md overflow-hidden">
        <CustomImage
          imageOBJ={cover}
          fill
          className="w-full object-cover hover:scale-105 transition-transform duration-300"
          alt="Blog Image"
        />
      </div>

      <Link href={`/blogs/${slug.current}`}>
        <div className="my-3 sm:my-4 md:my-5 lg:md-6">
          <time className="text-sm sm:text-base font-sans text-white/70">
            {new Date(_updatedAt).toDateString()}
          </time>
          <h3 className="text-xl md:text-2xl lg:text-3xl underline text-foreground hover:underline group-hover:text-accent dark:group-hover:text-primary transition-colors font-light">
            {title}
          </h3>
          <p className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-muted-foreground line-clamp-3 font-sans">
            {description}
          </p>
        </div>

        {tags && (
          <div className="flex flex-wrap gap-2 pb-3 sm:pb-4 md:pb-5 lg:pb-6">
            {tags.map((tag: string, key: number) => {
              return (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              );
            })}
          </div>
        )}
        <Author author={author} postedAt={_updatedAt} />
      </Link>
    </div>
  );
}

export default BlogCard;
