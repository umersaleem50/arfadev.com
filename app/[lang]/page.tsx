import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { cache } from "react";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import { urlFor } from "@/sanity/lib/image";
import { getStaticPage } from "@/sanity/data";

import Module from "@/components/modules/module";

import { HOMEPAGE_QUERY } from "@/sanity/data/queries";
const SchemaMarkup = dynamic(() => import("@/components/schema-markup"));

type Props = {
  params: { slug: string[] | string; lang: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const getPageData = cache(async (lang = "en", isDraftMode = false) => {
  const pageData = await getStaticPage(HOMEPAGE_QUERY, lang, isDraftMode);
  return pageData;
});

export async function generateMetadata({
  params: { lang },
}: Props): Promise<Metadata> {
  const pageData = await getPageData(lang, false);

  if (!pageData || !pageData?.page)
    return {
      title: "Homepage - Branding solutions for law firms.",
      description:
        "You will have an elegant & beautifully designed websites, including logo & graphic assets. Contact now to get started.",
    };

  const { page } = pageData;
  const { seo } = page;

  return {
    title: seo?.metaTitle,
    description: seo?.metaDesc,
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
    alternates: {
      canonical: page?.slug ? `/${lang}/${page.slug.current}` : `/${lang}`,
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

export default async function Home({ params: { lang } }: Props) {
  const { isEnabled: isDraftMode } = draftMode();

  const pageData = await getPageData(lang, isDraftMode);

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

export const revalidate = process.env.NODE_ENV === "development" ? 60 : 60 * 60;
