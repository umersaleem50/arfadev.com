import dynamic from "next/dynamic";
import type { Metadata, ResolvingMetadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { cache } from "react";

// import { joinSlugs } from "@/lib/utils";
import { getAllPageSlug, getPage } from "@/sanity/data";

import { urlFor } from "@/sanity/lib/image";
import { joinSlugs } from "@/lib/utils";

const SchemaMarkup = dynamic(() => import("@/components/schema-markup"));
const Module = dynamic(() => import("@/components/modules/module"));

type Props = {
  params: { slug: string[] | string };

  searchParams: { [key: string]: string | string[] | undefined };
};

const getPageData = cache(
  async (slug: string, lang: string, isDraftMode = false) => {
    const pageData = await getPage(slug, lang, isDraftMode);
    return pageData;
  }
);

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  // Seperate Lang & Slug
  const [language = "en", ...pureSlug] = params?.slug;

  const { isEnabled: isDraftMode } = draftMode();

  const planSlug = joinSlugs(pureSlug);

  // fetch data
  const pageData = await getPageData(planSlug, language, isDraftMode);

  if (!pageData || !pageData?.page)
    return {
      title: "Branding solutions for law firms.",
      description:
        "You will have an elegant & beautifully designed websites, including logo & graphic assets. Contact now to get started.",
    };

  const { page } = pageData;
  if (!page || !page?.content) notFound();
  const { seo } = page;

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: seo?.metaTitle,
    description: seo?.metaDesc,
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}` as string),
    alternates: {
      canonical: `/${language}/${planSlug}`,
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

export async function generateStaticParams() {
  const pages = await getAllPageSlug();

  return pages.map((slug: any) => ({
    slug: slug.current,
  }));
}

async function Page({
  params: { slug },
  searchParams,
}: {
  params: { slug: string; lang: string };
  searchParams: any;
}) {
  const [language = "en", ...pureSlug] = slug;
  const { isEnabled: isDraftMode } = draftMode();

  const planSlug = joinSlugs(pureSlug);

  const pageData = await getPageData(planSlug, language, isDraftMode);

  if (!pageData) notFound();

  const { page } = pageData;
  if (!page || !page?.content) notFound();
  const { content, schemaMarkup } = page;

  return (
    <>
      <main className="w-full h-full">
        {content.map((module: any, i: number) => {
          return <Module module={module} key={i} />;
        })}
      </main>
      {schemaMarkup && <SchemaMarkup schema={schemaMarkup} />}
    </>
  );
}

export default Page;

export const revalidate = process.env.NODE_ENV === "development" ? 60 : 10 * 60;
