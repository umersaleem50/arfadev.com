import dynamic from "next/dynamic";
import { cache } from "react";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { getPost } from "@/sanity/data";

import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";

import { portableComplex } from "@/components/portable-stucture/portable-complex";

const FooterModule = dynamic(
  () => import("@/components/modules/footer.module")
);

const MegaMenu = dynamic(() =>
  import("@/components/modules/mega-menu").then((el) => el.MegaMenu)
);
const ArticleBreadCrumbs = dynamic(
  () => import("@/components/article-breadcrumb")
);
const ShareButtons = dynamic(() => import("@/components/social-media-share"));
const Author = dynamic(() => import("@/components/author"));
const BlogCard = dynamic(() => import("@/components/blog-card"));
const ArticleCover = dynamic(
  () => import("@/components/modules/article-cover")
);
const CaseStudyCard = dynamic(() => import("@/components/case-study-card"));
const Badge = dynamic(() =>
  import("@/components/ui/badge").then((el) => el.Badge)
);

const SchemaMarkup = dynamic(() => import("@/components/schema-markup"));
const Module = dynamic(() => import("@/components/modules/module"));

const getPostData = cache(async (slug: string, isDraftMode = false) => {
  const pageData = await getPost(slug, isDraftMode);
  return pageData;
});

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { isEnabled: isDraftMode } = draftMode();
  const pageData = await getPostData(slug, isDraftMode);

  if (!pageData || !pageData?.page)
    return {
      title: "Our latest blogs on seo, web designing & web development.",
      description:
        "Learn about the tips & tricks to design & rank your law firm website.",
    };

  const { page } = pageData;
  const { seo } = page;

  return {
    title: seo?.metaTitle,
    description: seo?.metaDesc,
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
    alternates: {
      // canonical: page?.slug ? `/blogs/${slug}` : `/`,
      canonical: `/blogs/${slug}`,
    },

    authors: seo?.authors,
    keywords: seo?.keywords,
    creator: seo?.creator,
    publisher: seo?.publisher,

    openGraph: {
      images: [urlFor(seo?.shareGraphic).url()],
      publishedTime: page?._createdOn,
      title: seo?.shareTitle,
      description: seo?.shareDesc,
    },

    robots: {
      index: seo?.noindex,
      follow: seo?.nofollow,
      nocache: seo?.cache,
      googleBot: {
        index: seo?.index,
        follow: seo?.follow,
        noimageindex: seo?.imageindex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function Component({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { isEnabled: isDraftMode } = draftMode();
  // const pageData = await getPost(slug, isDraftMode);
  const pageData = await getPostData(slug, isDraftMode);

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
    _createdAt,
  } = page;

  return (
    <main className="flex flex-col">
      {schemaMarkup && <SchemaMarkup schema={schemaMarkup} />}
      {menu && <MegaMenu module={menu} />}
      <ArticleCover cover={cover} title={title} />
      <section className="flex max-w-[85rem] lg:mx-auto md:mx-6 mx-4 gap-x-8 items-start flex-col lg:flex-row">
        <div className="flex-initial max-w-[calc(85rem-30rem)] lg:mx-auto  auto-rows-auto">
          <ArticleBreadCrumbs
            className="col-start-1 col-span-8 pt-8 font-sans pb-8"
            slug={slug}
          />

          <div className="flex justify-between items-start flex-col md:flex-row gap-y-2 md:gap-y-0">
            <Author author={author} postedAt={_createdAt} />
            <ShareButtons />
          </div>

          <article className="dark:text-foreground prose-headings:text-foreground prose-strong:text-foreground prose-blockquote:text-foreground prose-a:text-primary prose prose-blockquote:border-l-4 prose-blockquote:border-primary md:prose-base prose-headings:font-serif font-sans lg:prose-lg prose-stone !max-w-none !w-full col-start-1 lg:col-span-8 md:col-span-6 col-span-4">
            <p className="py-10">{description}</p>
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
        </div>
        <aside className="max-w-[30rem] pt-12 pb-6 sticky top-8 left-0">
          <h3 className="text-2xl font-serif font-semibold">
            Read Case Studies
          </h3>
          <p className="text-sm font-sans text-muted-foreground">
            Learn how we help our clients.
          </p>
          <div className="flex flex-col gap-3 pt-8">
            <CaseStudyCard />
          </div>
        </aside>
      </section>
      {relatedPosts?.length && (
        <section className="max-w-[85rem] lg:mx-auto md:mx-6 mx-4 py-6 space-y-4">
          <h3 className="text-3xl font-semibold font-serif md:py-6 py-3">
            Related Posts
          </h3>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            {relatedPosts.map((blog: any, key: number) => {
              return <BlogCard {...blog} key={key} />;
            })}
          </div>
        </section>
      )}
      {content &&
        content.map((module: any, key: number) => {
          return <Module module={module} key={key} />;
        })}
      {footer && <FooterModule module={footer} />}
    </main>
  );
}

export const revalidate = process.env.NODE_ENV === "development" ? 60 : 10 * 60;
