import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import CustomImage from "./custom-image";
import { cn } from "@/lib/utils";
import Author from "./author";
import { Badge } from "./ui/badge";

function BlogCard({
  title,
  cover,
  _createdAt,
  author,
  slug,
  description,
  tags,
}: {
  title: string;
  cover?: any;
  _createdAt?: any;
  author?: any;
  slug?: { current: string };
  content?: any;
  description?: string;
  tags?: string[];
}) {
  return (
    <Link
      className="group sm:flex focus:outline-none"
      href={`/blogs/${slug?.current}` || "/not-found"}
    >
      <div
        className={cn(
          "shrink-0 relative overflow-hidden h-[300px] sm:w-[300px] sm:h-[450px] w-full group"
        )}
      >
        {cover && (
          <CustomImage
            className="size-full absolute top-0 start-0 object-cover group-hover:scale-110 transition-all duration-500 ease-in-out"
            alt={cover?.alt}
            fill
            objectFit={cover.objectFit}
            imageOBJ={cover}
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
          <h3 className="text-lg sm:text-2xl font-bold font-serif hover:text-primary">
            {title}
          </h3>
          <p className="mt-2 font-sans text-muted-foreground line-clamp-3">
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
    <div className="w-full group flex flex-col transition duration-300 group">
      <div className="aspect-w-16 aspect-h-11 relative h-[12rem] sm:h-[20rem] md:h-[32rem]">
        <CustomImage
          imageOBJ={cover}
          fill
          className="w-full object-cover"
          alt="Blog Image"
        />
      </div>

      <Link href={`/blogs/${slug.current}`}>
        <div className="my-6">
          <time className="text-sm sm:text-base font-sans text-white/70">
            {new Date(_updatedAt).toDateString()}
          </time>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold underline text-foreground hover:underline group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="mt-5 text-muted-foreground line-clamp-3">
            {description}
          </p>
        </div>
        {tags && (
          <div className="flex flex-wrap gap-2 lg:pb-6">
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
