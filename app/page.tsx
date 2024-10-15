import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";
import { getStaticPage } from "@/sanity/data";

import Module from "@/components/modules/module";

const SchemaMarkup = dynamic(() => import("@/components/schema-markup"));
import { HOMEPAGE_QUERY } from "@/sanity/data/queries";
import { cache } from "react";
import dynamic from "next/dynamic";

type Props = {
  params: { slug: string[] | string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const getPageData = cache(async (isDraftMode = false) => {
  const pageData = await getStaticPage(HOMEPAGE_QUERY, isDraftMode);
  return pageData;
});

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageData(false);

  if (!pageData || !pageData?.page)
    return {
      title: "Homepage - Branding solutions for law firms.",
      description:
        "You will have an elegant & beautifully designed websites, including logo & graphic assets. Contact now to get started.",
    };

  const { page } = pageData;
  const { seo } = page;

  return {
    title: seo.metaTitle,
    description: seo.metaDesc,
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
    alternates: {
      canonical: page?.slug ? `/${page.slug.current}` : `/`,
    },

    authors: seo.authors,
    keywords: seo.keywords,
    creator: seo.creator,
    publisher: seo.publisher,
    openGraph: {
      images: [urlFor(seo?.shareGraphic).url()],
      publishedTime: page._createdOn,
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

export default async function Home() {
  const { isEnabled: isDraftMode } = draftMode();

  const pageData = await getPageData(isDraftMode);

  if (!pageData || !pageData?.page) notFound();

  const { page } = pageData;

  const { content } = page;

  return (
    <main className="w-full h-full">
      {page?.schemaMarkup && <SchemaMarkup schema={page.schemaMarkup} />}
      {content.map((module: any, i: number) => {
        return <Module module={module} key={i} />;
      })}
    </main>
  );
}

export const revalidate = 60;
