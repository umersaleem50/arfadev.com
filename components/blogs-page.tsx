import PaginationSearchParams from "@/components/pagination-search-params";
import { ALL_POSTS_QUERY, BLOG_SEARCH_QUERY } from "@/sanity/data/queries";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { ILargeBlogCard, LargeBlogCard } from "./blog-card";
import CustomImage from "./SanityImage";
import { SearchInput } from "./search-input";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";

// All unique tags

const fetchPosts = async ({
  lang,
  skips,
  limit,
  queryStr,
  // tags,
}: {
  lang: string;
  skips: number;
  limit: number;
  queryStr?: string;
  // tags?: string;
}) => {
  if (queryStr) {
    return await client.fetch(
      BLOG_SEARCH_QUERY,
      { queryStr: queryStr, limit, skips },
      {},
    );
  } else return await client.fetch(ALL_POSTS_QUERY, { lang, limit, skips }, {});
};

const NoBlogFallback = () => {
  return (
    <>
      <p className="text-xl font-serif text-primary mb-3">No Blog Found.</p>
      <p className="text-base font-sans text-muted-foreground">
        Try searching something else.
      </p>
    </>
  );
};

async function BlogsPage(props: { searchParams: any; lang: string }) {
  const searchParams = await props.searchParams;

  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page || 1);
  const limit = Number(searchParams?.limit || 10);
  // const tags = searchParams?.tags;

  const { posts, featured } = await fetchPosts({
    lang: props.lang || "en",
    skips: (currentPage - 1) * 10,
    limit,
    queryStr: query,
    // tags,
  });

  return (
    <div className="w-full">
      <div className=" px-4 py-8 max-w-[85rem] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="col-start-1 lg:col-span-2">
          <SearchInput className="grid md:hidden mb-4" />
          {posts?.map((post: ILargeBlogCard, key: number) => {
            return (
              <LargeBlogCard
                key={key}
                _updatedAt={post?._updatedAt}
                author={post?.author}
                cover={post?.cover}
                description={post?.description}
                slug={post?.slug}
                title={post?.title}
                tags={post.tags}
              />
            );
          })}
          {!posts.length && <NoBlogFallback />}
        </div>

        {/* Smaller Featured Posts */}
        <div className="space-y-6 sticky top-4 self-start">
          <SearchInput className="hidden md:grid" />
          <h2 className="text-2xl mb-4 font-serif">Featured Blogs</h2>
          {featured?.map((post: ILargeBlogCard, key: number) => (
            <Card key={key} className="group transition-colors">
              <Link
                href={`/blogs/${post.slug.current}`}
                className="flex flex-row h-auto group-hover:border-primary border-muted border"
              >
                <CustomImage
                  imageOBJ={post.cover}
                  width={120}
                  height={120}
                  className="rounded-l-lg object-cover"
                />
                <CardContent className="p-4 gap-y-2 flex flex-col justify-between">
                  <CardTitle className="text-lg font-serif">
                    {post.title}
                  </CardTitle>
                  <CardDescription>
                    Learn how I helped chishti law firm for 3x traffic, in just
                    one week.
                  </CardDescription>
                  {post?.tags && (
                    <div className="flex flex-wrap gap-2">
                      {post?.tags?.map((tag: string) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>

      <PaginationSearchParams />
    </div>
    // </div>
  );
}

export default BlogsPage;
