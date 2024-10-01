import { groq } from "next-sanity";

export const ALL_POSTS_QUERY = groq`*[_type == "page"  && category == "post"][0...$items]{...,author->{name,photo}}`;
export const ALL_SERVICES_QUERY = groq`*[_type == "service"  && defined(slug)]`;
export const ALL_TEAM_QUERY = groq`*[_type == "page" && category == "team"]{slug,content[_type == "one-member"]{member->}[0]}`;

export const moduleQueries = `{
    ...,
      _type == 'menu' => @->,
      _type == 'mission' => @,
      _type == 'section' => @->,
      _type = "hero" => {isFullImage},
      }`;

export const site = `
  "site": {
           "title": *[_type == "generalSettings"][0].siteTitle,
             "rootDomain": *[_type == "generalSettings"][0].siteURL
           },`;

export const homeID = `*[_type=="generalSettings"][0].home->_id`;
export const errorID = `*[_type=="generalSettings"][0].error->_id`;
export const servicesBaseURL = `*[_type=="generalSettings"][0].servicesBaseURL`;

const page = `
  "type": _type,
  "slug": slug.current,
  "isHome": _id == ${homeID},
`;

export const ptContent = `
  ...,
  markDefs[]{
  isButton,
  page->
  },
  
`;

export const metaData = `metaData{...,mainLink{...,page->{slug}}}`;

export const navPage = `_type == "navPage" =>{...,title,page->}`;

export const modules = `
      ...,
      // _type == "menu" =>  {...,items[]{...,"navPage":{page->}},...},  
      _type == "menu" => {...,items[]{...,${navPage},_type == "navDropdown" =>{dropdownItems[]{...,${navPage}}},featured{...,page->}}},
      _type == "section" => @->,
      _type == "mission" => @->,
      _type == "gallery" => @->,
      _type == "team" => {...,team[]->,${metaData}},
      _type ==  "services" => {...,content[]{...,defined(page) => {page ->{slug}}},${metaData}},
      _type == "testimonial" => @->,
      _type == "featured-posts" => {...,${metaData},posts[]->{...,author->{name,photo}}},
      _type == "footer" => {...,footerRoutes[]{...,routes[]{...,${navPage}}},policies[]{...,${navPage}}},
      _type == "one-member" => {...,member->},
      _type == "awards" => {...,${metaData},content[]->},
      _type == "grid" => {...},
      _type == 'hero' => {
          content[]{...,
            markDefs[]{
              ...,page->{slug,title}
              }
           }
        }

`;

export const HOMEPAGE_QUERY = `*[_type == "page" && _id == ${homeID}] | order(_updatedAt desc)[0]{
    "id": _id,
    hasTransparentHeader,
    author->{name,photo},
    content[]{
    defined(_ref)=>{...@->content[0]{${modules}}},
    !defined(_ref)=>{${modules}}
    },
    title,
    seo}
  `;

export const POST_QUERY = `
        {
          "page": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc)[0]{
            "id": _id,
            hasTransparentHeader,
            content[]{
            defined(_ref)=>{...@->content[0]{${modules}}},
            !defined(_ref)=>{${modules}}
            },
            !defined(_ref)=>{
            ${modules}
            },
            title,
            seo
          },
           ${site}
        }
        `;

export const SERVICE_QUERY = `
        {
          "page": *[_type == "service" && slug.current == $slug] | order(_updatedAt desc)[0]{
            "id": _id,
            hasTransparentHeader,
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
            !defined(_ref)=>{
            ${modules}
            },
            title,
            seo
          },
           ${site}
        }
        `;

export const NOT_FOUND = `
    *[_type == "page" && _id == ${errorID}] | order(_updatedAt desc)[0]{
      "id": _id,
      hasTransparentHeader,
      content[]{
        defined(_ref) => { ...@->content[0] {
          ${modules}
        }},
        !defined(_ref) => {
          ${modules},
        }
      },
      title,
      seo
    }
  `;

export const SITEMAP_QUERY = `*[_type == "page" && category != "error"]{_updatedAt,slug,"priority":seo.priority,"changeFrequency":seo.changeFrequency}`;

// "authors":seo.authors,"creator":seo.creator,"keywords":seo.keywords,"publisher":seo.publisher
