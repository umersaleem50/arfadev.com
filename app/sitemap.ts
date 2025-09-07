import { MetadataRoute } from "next";
import { SanityDocument } from "next-sanity";

import { SITEMAP_QUERY } from "@/sanity/data/queries";
import { sanityFetch } from "@/sanity/lib/client";
import { uniqueEntries } from "@/lib/utils";

const fetchPosts = async () => {
  return await sanityFetch<SanityDocument[]>({
    query: SITEMAP_QUERY,
    params: { docs: ["page"] },
  });
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const docs: any = await fetchPosts();

  const filterDoc = uniqueEntries(docs);

  const postEntries = filterDoc.map(
    ({
      slug,
      _updatedAt,
      priority,
      changeFrequency,
      language,
      translations,
    }: any) => {
      const documentObj: any = {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}${translations?.length ? "" : "/" + language}/${slug.current}`,
        lastModified: _updatedAt,
        priority,
        changeFrequency,
        alternates: {
          languages: {},
        },
      };

      if (
        translations?.map(
          ({ language, slug }: { language: string; slug: any }) => {
            documentObj["alternates"]["languages"][language] =
              `${process.env.NEXT_PUBLIC_BASE_URL}/${language || "en"}/${slug.current}`;
          }
        )
      )
        return documentObj;
    }
  );

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/sitemap.xml` },
    ...postEntries,
  ];
}

export const revalidate = 60;
