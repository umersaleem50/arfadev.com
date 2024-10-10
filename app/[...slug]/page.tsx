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

const getPageData = cache(async (slug: string, isDraftMode = false) => {
  const pageData = await getPage(slug, isDraftMode);
  return pageData;
});

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params

  const { isEnabled: isDraftMode } = draftMode();

  const planSlug = joinSlugs(params.slug);

  // fetch data
  const pageData = await getPageData(planSlug, isDraftMode);

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
      canonical: planSlug,
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
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
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
  params: { slug: string };
  searchParams: any;
}) {
  const { isEnabled: isDraftMode } = draftMode();

  const planSlug = joinSlugs(slug);

  const pageData = await getPageData(planSlug, isDraftMode);

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

export const revalidate = 60;

export default Page;
