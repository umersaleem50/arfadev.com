import Module from "@/components/modules/module";

const NotFoundDefault = dynamic(() => import("@/components/not-found-default"));

import { NOT_FOUND } from "@/sanity/data/queries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { cache } from "react";

const getPageData = cache(async (isDraftMode = false) => {
  const pageData = await await client.fetch(NOT_FOUND, { lang: "en" });
  return pageData;
});

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageData(false);

  if (!page)
    return {
      title: "Page not found",
      description:
        "Page not found or moved permanently. Please go back to homepage.",
    };

  const { seo } = page;

  return {
    title: seo.metaTitle,
    description: seo.metaDesc,
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),

    openGraph: {
      images: [urlFor(seo?.shareGraphic).url()],
      publishedTime: page._createdOn,
      title: "Page not found",
      description:
        "Page not found or moved permanently. Please go back to homepage.",
    },
  };
}

async function NotFound() {
  const data = await client.fetch(NOT_FOUND, { lang: "en" });

  if (!data || !data?.content?.length) return <NotFoundDefault />;

  const { content } = data;
  return (
    <main className="w-full h-full">
      {content.map((module: any, i: number) => {
        return <Module module={module} key={i} />;
      })}
    </main>
  );
}

export const revalidate = 60 * 10;

export default NotFound;
