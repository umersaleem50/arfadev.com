import { MetadataRoute } from "next";
import { SanityDocument } from "next-sanity";

import { SITEMAP_QUERY } from "@/sanity/data/queries";
import { sanityFetch } from "@/sanity/lib/client";

const fetchPosts = async () => {
  return await sanityFetch<SanityDocument[]>({
    query: SITEMAP_QUERY,
    params: { docs: ["page"] },
  });
};

const uniqueEntries = (data: any) =>
  Object.values(
    data.reduce((acc: any, entry: any) => {
      const key = entry.slug.current;
      if (
        !acc[key] ||
        new Date(acc[key]._updatedAt) < new Date(entry._updatedAt)
      ) {
        acc[key] = entry;
      }
      return acc;
    }, {})
  );

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const docs: any = await fetchPosts();

  const uniqueDoc = uniqueEntries(docs);

  const postEntries = uniqueDoc.map(
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
              `${process.env.NEXT_PUBLIC_BASE_URL}/${language}/${slug.current}`;
          }
        )
      )
        console.log(documentObj.alternates);

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
