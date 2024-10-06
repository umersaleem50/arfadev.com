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
import RelatedBlogCard from "@/components/related-blog-card";
import Author from "@/components/author";
import BlogCard from "@/components/blog-card";

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
  } = page;

  console.log(relatedPosts);

  return (
    <main className="flex flex-col">
      {menu && <MegaMenu module={menu} />}
      <div className="relative h-[70vh] min-h-[400px] w-full px-2">
        {cover && (
          <CustomImage
            alt={cover?.alt}
            className="object-cover"
            fill
            src={urlFor(cover?.asset).url()}
            imageOBJ={cover?.asset}
            objectFit={cover?.objectFit}
          />
        )}
        <h1 className="font-serif lg:leading-normal text-4xl md:text-5xl lg:text-6xl font-bold text-white text-left z-10 col-start-1 col-span-8 pt-8 pb-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] lg:w-auto">
          {title}
        </h1>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center"></div>
      </div>
      <div className="flex-initial max-w-[calc(85rem-30rem)] mx-auto auto-rows-auto">
        <ArticleBreadCrumbs
          className="col-start-1 col-span-8 pt-8 font-sans pb-8"
          slug={slug}
        />
        {/* title */}

        <Author author={author} />

        <p className="text-md font-light font-sans col-start-1 col-span-8 text-primary">
          Posted on August 24, 2023
        </p>

        <article className="prose prose-blockquote:border-l-4 prose-blockquote:border-primary md:prose-base prose-headings:font-serif font-sans lg:prose-lg prose-stone !max-w-none !w-full col-start-1 col-span-8">
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

      {footer && <FooterModule module={footer} />}
    </main>
  );
}
