import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { cache } from "react";

import { getAllPageSlug, getPage } from "@/sanity/queries";

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
  const { slug } = params;

  const { isEnabled: isDraftMode } = draftMode();

  const planSlug = joinSlugs(slug);

  // fetch data
  const pageData = await getPageData(planSlug, isDraftMode);

  if (!pageData || !pageData?.page)
    return {
      title: {
        template: "% - Arfa Developers",
        default: "Hire an independent frontend developer - Arfa Developers",
      },
      description:
        "We help development teams with frontend development based in Europe and America. Our tech stack is React.Js and Next.Js. Contact us to get started.",
    };

  const { page } = pageData;
  if (!page || !page?.content) notFound();
  const { seo } = page;

  const isHomePage = planSlug === "home";

  return {
    title: seo?.metaTitle,
    description: seo?.metaDesc,

    keywords: seo?.keywords,
    robots: {
      index: isHomePage ? false : (seo.noindex ?? true),
      follow: seo.nofollow ?? true,
      googleBot: {
        index: isHomePage ? false : (seo.noindex ?? true),
        follow: seo.nofollow ?? true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    alternates: {
      canonical: isHomePage
        ? `${process.env.NEXT_PUBLIC_BASE_URL}/`
        : `${process.env.NEXT_PUBLIC_BASE_URL}/${planSlug}`,
    },

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

async function Page({ params: { slug } }: { params: { slug: string } }) {
  const { isEnabled: isDraftMode } = draftMode();

  const planSlug = joinSlugs(slug);

  const pageData = await getPageData(planSlug, isDraftMode);

  if (!pageData) notFound();

  const { page } = pageData;
  if (!page || !page?.content) notFound();
  const { content, seo } = page;
  const schemaMarkup = seo.schemaMarkup;

  return (
    <>
      {schemaMarkup && <SchemaMarkup schema={schemaMarkup} />}
      <main className="w-full h-full">
        {content.map((module: any, i: number) => {
          return <Module module={module} key={i} />;
        })}
      </main>
    </>
  );
}

export default Page;

export const revalidate =
  (process.env.REVALIDATION_DURATION ?? process.env.NODE_ENV === "development")
    ? 60
    : 60 * 60;
