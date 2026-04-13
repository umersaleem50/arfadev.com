import { MetadataRoute } from "next";

import { fetchBlogSitemap } from "@/sanity/queries/sitemap";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const docs: any = await fetchBlogSitemap();

  const postEntries = docs.map(({ slug, _updatedAt, priority }: any) => {
    return {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${slug.current}`,
      lastModified: _updatedAt,
      priority,
    };
  });

  return postEntries;
}
export const revalidate =
  (process.env.REVALIDATION_DURATION ?? process.env.NODE_ENV === "development")
    ? 60
    : 60 * 60;
