import { MetadataRoute } from "next";
import { SanityDocument } from "next-sanity";

import { sanityFetch } from "@/sanity/lib/client";
import { BLOGS_SITEMAP_QUERY } from "../../sanity/data/queries";

const fetchPosts = async () => {
  const data = await sanityFetch<SanityDocument[]>({
    query: BLOGS_SITEMAP_QUERY,
  });

  return data;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const docs: any = await fetchPosts();

  const postEntries = docs.map(({ slug, _updatedAt, priority }: any) => {
    return {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${slug.current}`,
      lastModified: _updatedAt,
      priority,
    };
  });

  return postEntries;
}

export const revalidate = 60;
