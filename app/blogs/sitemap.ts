import { MetadataRoute } from "next";
import { SanityDocument } from "next-sanity";

import { SITEMAP_QUERY } from "@/sanity/data/queries";
import { sanityFetch } from "@/sanity/lib/client";
import { uniqueEntries } from "@/lib/utils";

const fetchPosts = async () => {
  const data = await sanityFetch<SanityDocument[]>({
    query: SITEMAP_QUERY,
    params: { docs: ["post"] },
  });

  return data;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const docs: any = await fetchPosts();

  const filterDocs = uniqueEntries(docs);

  const postEntries = filterDocs.map(
    ({
      slug,
      _updatedAt,
      priority,
      changeFrequency,
      language,
      translations,
    }: any) => {
      const documentObj: any = {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}${translations?.length ? "/blogs" : "/" + language + "/blogs"}/${slug.current}`,
        lastModified: _updatedAt,
        priority,
        changeFrequency,
        alternates: {
          languages: {},
        },
      };

      console.log(translations);

      if (
        translations?.map(
          ({ language, slug }: { language: string; slug: any }) => {
            documentObj["alternates"]["languages"][language] =
              `${process.env.NEXT_PUBLIC_BASE_URL}/${language}/blogs/${slug.current}`;
          }
        )
      )
        console.log(documentObj.alternates);

      return documentObj;
    }
  );

  return postEntries;
}

export const revalidate = 60;
