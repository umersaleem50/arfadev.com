import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { cache } from "react";

import { urlFor } from "@/sanity/lib/image";

import Module from "@/components/modules/module";

import { HOMEPAGE_QUERY } from "@/sanity/data/queries";
import { getStaticPage } from "@/sanity/queries";
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
      title: {
        template: "% - Arfa Developers",
        default: "Hire an independent frontend developer - Arfa Developer.",
      },
      description:
        "We help development teams with frontend development based in Europe and America. Our tech stack is React.Js and Next.Js. Contact us to get started.",
    };

  const { page } = pageData;
  const { seo } = page;

  return {
    title: seo?.metaTitle,
    description: seo?.metaDesc,
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    },

    robots: {
      index: seo.noindex ?? true,
      follow: seo.nofollow ?? true,
      googleBot: {
        index: seo.noindex ?? true,
        follow: seo.nofollow ?? true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
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
  };
}

export default async function Home({ params: { lang } }: Props) {
  const { isEnabled: isDraftMode } = draftMode();

  const pageData = await getPageData(lang, isDraftMode);

  if (!pageData || !pageData?.page) notFound();

  const { page } = pageData;

  const { content, seo } = page;
  const schemaMarkup = seo.schemaMarkup;

  return (
    <>
      {schemaMarkup && <SchemaMarkup schema={schemaMarkup} />}
      <main className="w-full h-full">
        {content.map((module: unknown, i: number) => {
          return <Module module={module} key={i} />;
        })}
      </main>
    </>
  );
}

export const revalidate = process.env.NODE_ENV === "development" ? 60 : 60 * 60;
