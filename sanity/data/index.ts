import { client } from "../lib/client";
import { footerQuery, menuQuery, modules, site } from "./queries";
import { token } from "../lib/token";
import { QueryOptions } from "next-sanity";

export async function getAllPageSlug() {
  const query = `*[_type == "page"]{ slug }`;

  const data = await client.fetch(query, {}, { perspective: "previewDrafts" });

  return data;
}

export async function getPage(
  slug: string,
  lang = "en",
  isDraftMode?: boolean
) {
  // const slugs = JSON.stringify([slug, `/${slug}`, `/${slug}/`]);
  const slugs = [slug, `/${slug}`, `/${slug}/`];

  const queryOptions: QueryOptions = isDraftMode
    ? { perspective: "previewDrafts", token, stega: true, useCdn: false }
    : {
        perspective: "published",
        useCdn: true,
        cache: "force-cache",
        stega: false,
      };

  const query = `
        {
          "page": *[_type == "page" && language == $lang && slug.current in $slugs ] | order(_updatedAt desc)[0]{
            "id": _id,
            hasTransparentHeader,
            author->{name,photo},
           content[]{
            defined(_ref)=>{...@->content[0]{${modules}}},
            !defined(_ref)=>{${modules}}
            },
            body{...,cta->},
            title,
            seo,
            schemaMarkup,
          },
           ${site}
        }
        `;

  const data = await client.fetch(query, { slugs, lang }, queryOptions);

  return data;
}

export async function getPostsPage(isDraftMode?: boolean) {
  const queryOptions: QueryOptions = isDraftMode
    ? { perspective: "previewDrafts", token, stega: true, useCdn: false }
    : {
        perspective: "published",
        useCdn: true,
        cache: "force-cache",
        stega: false,
      };

  const query = `{
          
          "footer":${footerQuery},
          "menu":${menuQuery},
          
           ${site}

        }`;

  const data = await client.fetch(query, {}, queryOptions);

  return data;
}

export async function getPost(slug: string, isDraftMode?: boolean) {
  const slugs = JSON.stringify([slug, `/${slug}`, `/${slug}/`]);

  const queryOptions: QueryOptions = isDraftMode
    ? { perspective: "previewDrafts", token, stega: true, useCdn: false }
    : {
        perspective: "published",
        useCdn: true,
        cache: "force-cache",
        stega: false,
      };

  const query = `{
          "page": *[_type == "post" && slug.current in ${slugs}] | order(_updatedAt desc)[0]{
            "id": _id,
            hasTransparentHeader,
            content[]{
            defined(_ref)=>{...@->content[0]{${modules}}},
            !defined(_ref)=>{${modules}}
            },
            body[]{...,_type == "cta" => @->},
            description,
            title,
            cover,
            seo,
            tags,
            author->{name,photo},
            relatedPosts[]->{cover,author->{name,photo},title,publishedAt,slug,description},
            schemaMarkup,
            _createdAt
          },
          "footer":${footerQuery},
          "menu":${menuQuery},
          
           ${site}

        }`;

  const data = await client.fetch(query, { slugs }, queryOptions);

  return data;
}

export async function getStaticPage(
  pageData: any,
  lang = "en",
  isDraftMode?: boolean
) {
  const queryOptions: QueryOptions = isDraftMode
    ? { perspective: "previewDrafts", token, stega: true, useCdn: false }
    : { perspective: "published", useCdn: true, stega: false };

  const query = `
    {
      "page": ${pageData},
      ${site}
    }
    `;

  const data = await client.fetch(query, { lang }, queryOptions);

  return data;
}
