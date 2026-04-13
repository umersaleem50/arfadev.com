import { SanityDocument } from "next-sanity";
import { BLOGS_SITEMAP_QUERY, SITEMAP_QUERY } from "../data";
import { sanityFetch } from "../lib/client";

export const fetchPageSitemap = async () => {
  const data = await sanityFetch<SanityDocument[]>({
    query: SITEMAP_QUERY,
  });

  return data;
};

export const fetchBlogSitemap = async () => {
  const data = await sanityFetch<SanityDocument[]>({
    query: BLOGS_SITEMAP_QUERY,
  });

  return data;
};
