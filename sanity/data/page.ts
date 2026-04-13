import { homeID, site } from "./global";
import { modules } from "./module";

export const HOMEPAGE_QUERY = `*[_type == "page" && _id == ${homeID}] | order(_updatedAt desc)[0]{
    "id": _id,
    hasTransparentHeader,
    author->{name,photo},
    content[]{
    defined(_ref)=>{...@->content[0]{${modules}}}, 
    !defined(_ref)=>{${modules}}
    },
    title,
    seo,schemaMarkup}
  `;

export const PAGE_QUERY = `
        {
          "page": *[_type == "page" && slug.current in $slugs] | order(_updatedAt desc)[0]{
            "id": _id,
            hasTransparentHeader,
              author{name,photo},
            content[]{
            defined(_ref)=>{...@->content[0]{${modules}}},
            !defined(_ref)=>{${modules}}
            },
            
            title,
            seo
          },
           ${site}
        }
        `;
