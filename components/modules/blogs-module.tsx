import React from "react";
import BlogCard from "../blog-card";
import Section from "../section";

function BlogsModule({ module }: any) {
  const metaData = module?.metaData || {
    miniTitle: "",
    title: "",
    subtitle: "",
  };
  const posts = module?.posts || [];

  return (
    <Section sectionData={metaData}>
      <div className="grid lg:grid-cols-2 gap-6">
        {posts.map((post: any, key: number) => {
          return <BlogCard key={key} {...post} />;
        })}
      </div>
    </Section>
  );
}

export default BlogsModule;
