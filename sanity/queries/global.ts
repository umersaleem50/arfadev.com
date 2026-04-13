import { QueryOptions } from "next-sanity";
import { footerQuery, menuQuery, site } from "../data/queries";
import { client } from "../lib/client";
import { token } from "../lib/token";

export async function getNavAndFooter(isDraftMode?: boolean) {
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
