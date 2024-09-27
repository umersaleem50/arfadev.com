import Image from "next/image";
import React from "react";
import BlogCard from "../blog-card";
import Section from "../section";
import { Button } from "../ui/button";

function BlogsModule() {
  return (
    <Section
      options={{
        section: "Blogs",
        title: "Read blogs to increase your revenue for your law firm;",
      }}
    >
      <div className="grid lg:grid-cols-2 gap-6">
        <BlogCard />
        <BlogCard />
      </div>

      <div className="flex justify-between items-center mt-24 pt-24 border-t border-primary">
        <p className="text-sm leading-normal text-foreground font-sans max-w-md">
          Everything we do is focused on generating more qualified cases for
          your law firm.
        </p>
        <Button
          variant={"outline"}
          size={"lg"}
          className="text-foreground border-foreground hover:border-secondary"
        >
          Explore More
        </Button>
      </div>
    </Section>
  );
}

export default BlogsModule;
