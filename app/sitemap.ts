import { MetadataRoute } from "next";

import { fetchPageSitemap } from "@/sanity/queries/sitemap";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages: any = await fetchPageSitemap();

  const postEntries = pages.map(({ slug, _updatedAt, priority }: any) => {
    return {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${slug.current}`,
      lastModified: _updatedAt,
      priority,
    };
  });

  return [
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/sitemap.xml` },
    ...postEntries,
  ];
}
export const revalidate =
  (process.env.REVALIDATION_DURATION ?? process.env.NODE_ENV === "development")
    ? 60
    : 60 * 60;
