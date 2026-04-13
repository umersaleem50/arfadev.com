import { groq } from "next-sanity";
import { footerQuery } from "./footer";
import { featuredCaseStudies, ptContent, site } from "./global";
import { modules } from "./module";
import { menuQuery } from "./navbar";

export const FEATURED_BLOGS = `*[_type=="generalSettings"][0].featuredBlogs[]->{cover,title,tags,slug{current},description}`;

export const ALL_POSTS_QUERY = groq`{"posts":*[_type == "post"][$skips...$limit]{...,author->{name,photo}},"featured":${FEATURED_BLOGS}}`;

export const BLOG_SEARCH_QUERY = `{"posts":*[_type == "post" && (title match $queryStr || slug.current match $queryStr || tags match $queryStr || description match $queryStr)][$skips...$limit] {
    _id,
    title,
    tags,
    slug,
    cover,
    description,
    _updatedAt,
    author->{name,photo}
  },
  "featured":${FEATURED_BLOGS}
    }`;

export const BLOGS_POST = `{
          "page": *[_type == "post" && slug.current in $slugs] | order(_updatedAt desc)[0]{
            "id": _id,
            hasTransparentHeader,
            content[]{
            defined(_ref)=>{...@->content[0]{${modules}}},
            !defined(_ref)=>{${modules}}
            },
            body[]{...,${ptContent},_type == "cta" => @->},
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
          "featuredCaseStudies":${featuredCaseStudies},
           ${site}

        }`;
