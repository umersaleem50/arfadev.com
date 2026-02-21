import Link from "next/link";
import CustomImage from "./SanityImage";
import Author from "./author";
// import TimeAgo from "javascript-time-ago";
// import es from "javascript-time-ago/locale/es";

// TimeAgo.addLocale(es);

function RelatedBlogCard({ slug, cover, author, publishedAt, title }: any) {
  //   const timeAgo = new TimeAgo("en-US");
  return (
    <Link href={slug?.current || "/not-found"}>
      <figure className="relative w-full h-[400px] max-w-[500px] flex">
        {cover && (
          <CustomImage
            height={400}
            width={500}
            alt={cover?.alt}
            imageOBJ={cover}
            objectFit={cover?.objectFit}
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
