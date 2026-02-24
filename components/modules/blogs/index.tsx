import Section from "@/components/section";
import BlogCard from "./blog-card";
import { FeaturedBlogs } from "./types";

function BlogsModule({ module }: { module: FeaturedBlogs }) {
  const metaData = module?.metaData || {
    miniTitle: "",
    title: "",
    subtitle: "",
  };
  const posts = module?.posts;

  return (
    <Section sectionData={metaData}>
      <div className="grid lg:grid-cols-2 gap-6">
        {posts?.map((post: BlogCard, key: number) => {
          return (
            <BlogCard
              key={key}
              cover_vertical={post.cover_vertical}
              title={post.title}
              _createdAt={post._createdAt}
              author={post.author}
              description={post.description}
              slug={post.slug}
              tags={post.tags}
            />
          );
        })}
      </div>
    </Section>
  );
}

export default BlogsModule;
