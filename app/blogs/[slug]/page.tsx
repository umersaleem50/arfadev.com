import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { getPost } from "@/sanity/data";

import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import { purifyString } from "@/lib/utils";

import { MegaMenu } from "@/components/modules/mega-menu";
import FooterModule from "@/components/modules/footer.module";
import CustomImage from "@/components/custom-image";
import { portableComplex } from "@/components/portable-stucture/portable-complex";

import ArticleBreadCrumbs from "@/components/article-breadcrumb";
import ShareButtons from "@/components/social-media-share";
import { Badge } from "@/components/ui/badge";
import Author from "@/components/author";
import BlogCard from "@/components/blog-card";
import ArticleCover from "@/components/modules/article-cover";
import CaseStudyCard from "@/components/case-study-card";
import Module from "@/components/modules/module";
import SchemaMarkup from "@/components/schema-markup";

export default async function Component({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { isEnabled: isDraftMode } = draftMode();
  const pageData = await getPost(slug, isDraftMode);

  const page = pageData?.page;

  if (!page) return notFound();

  const menu = pageData?.menu;
  const footer = pageData?.footer;

  const {
    title,
    cover,
    tags,
    content,
    description,
    author,
    body,
    relatedPosts = [],
    schemaMarkup,
  } = page;

  console.log(relatedPosts);

  return (
    <main className="flex flex-col">
      {schemaMarkup && <SchemaMarkup schema={schemaMarkup} />}
      {menu && <MegaMenu module={menu} />}
      <ArticleCover cover={cover} title={title} />
      <div className="flex max-w-[85rem] mx-auto gap-x-8 items-start">
        <div className="flex-initial max-w-[calc(85rem-30rem)] mx-auto auto-rows-auto">
          <ArticleBreadCrumbs
            className="col-start-1 col-span-8 pt-8 font-sans pb-8"
            slug={slug}
          />

          <div className="flex justify-between items-start">
            <Author author={author} />
            <ShareButtons />
          </div>

          <article className="dark:text-foreground prose-headings:text-foreground prose-strong:text-foreground prose-blockquote:text-foreground prose-a:text-primary prose prose-blockquote:border-l-4 prose-blockquote:border-primary md:prose-base prose-headings:font-serif font-sans lg:prose-lg prose-stone !max-w-none !w-full col-start-1 col-span-8">
            <p className="py-10">{purifyString(description)}</p>
            <PortableText value={body} components={portableComplex} />
          </article>

          <div className="col-start-1 col-span-8 flex gap-4 py-8">
            {tags &&
              tags.map((tag: string, key: number) => {
                return <Badge key={key}>{tag}</Badge>;
              })}
          </div>
          <ShareButtons className="col-start-1 col-span-8 pb-12" />
          <hr />
          {relatedPosts?.length && (
            <div className="col-span-3 col-start-10 self-start py-6 space-y-4">
              <h3 className="text-3xl font-serif py-6">Related Posts</h3>
              {relatedPosts.map((blog: any, key: number) => {
                return <BlogCard {...blog} key={key} />;
              })}
            </div>
          )}
        </div>
        <div className="max-w-[30rem] pt-12 pb-6 sticky top-8 left-0">
          <h3 className="text-2xl font-serif font-semibold">
            Read Case Studies
          </h3>
          <p className="text-sm font-sans text-muted-foreground">
            Learn how we help our clients.
          </p>
          <div className="flex flex-col gap-3 pt-8">
            <CaseStudyCard />
          </div>
        </div>
      </div>
      {content &&
        content.map((module: any, key: number) => {
          return <Module module={module} key={key} />;
        })}
      {footer && <FooterModule module={footer} />}
    </main>
  );
}
