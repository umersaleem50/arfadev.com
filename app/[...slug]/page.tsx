import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { cache } from "react";

import { getAllPageSlug, getPage } from "@/sanity/data";

import { joinSlugs } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

  return {
    title: seo?.metaTitle,
    description: seo?.metaDesc,

    keywords: seo?.keywords,

    openGraph: {
      images: [urlFor(seo?.shareGraphic).url()],
      publishedTime: page?._createdOn,
      title: seo?.shareTitle,
      description: seo?.shareDesc,
    },
  };
}

export async function generateStaticParams() {
  const pages = await getAllPageSlug();

  return pages.map((slug: { current: string }) => ({
    slug: slug.current,
  }));
}

async function Page({
  params: { slug },
}: {
  params: { slug: string; lang: string };
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

export default Page;

export const revalidate =
  (process.env.REVALIDATION_DURATION ?? process.env.NODE_ENV === "development")
    ? 60
    : 60 * 60;
