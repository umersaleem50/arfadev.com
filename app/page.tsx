import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";
import { getStaticPage } from "@/sanity/data";

import Module from "@/components/modules/module";
// import WhyChooseUs from "@/components/modules/why-choose-us";
// import PortfolioModuel from "@/components/modules/portfolio-module";
// import Testimonials from "@/components/modules/testimonial";
// import Services from "@/components/modules/services.module";
// import ContactModule from "@/components/modules/contact.module";
// import { MegaMenu } from "@/components/modules/mega-menu";

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
      images: [urlFor(seo.shareGraphic).url()],
      title: seo.shareTitle,
      description: seo.shareDesc,
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
      {/* <PortfolioModuel />
      <Testimonials />
      <WhyChooseUs />
      <Services />
      <ContactModule /> */}
    </main>
  );
}

export const revalidate = 60;
