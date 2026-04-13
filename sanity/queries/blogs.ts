import { QueryOptions } from "next-sanity";
import { BLOGS_POST } from "../data";
import { client } from "../lib/client";
import { token } from "../lib/token";

export async function getAllBlogSlug() {
  const query = `*[_type == "post"]{ slug }`;

  const data = await client.fetch(query, {}, { perspective: "previewDrafts" });

  return data;
}

export async function getPost(slug: string, isDraftMode?: boolean) {
  const slugs = [slug, `/${slug}`, `/${slug}/`];

  const queryOptions: QueryOptions = isDraftMode
    ? { perspective: "previewDrafts", token, stega: true, useCdn: false }
    : {
        perspective: "published",
        useCdn: true,
        cache: "force-cache",
        stega: false,
      };

  const data = await client.fetch(BLOGS_POST, { slugs }, queryOptions);

  return data;
}
