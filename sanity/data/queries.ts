import { groq } from "next-sanity";

export const ALL_SERVICES_QUERY = groq`*[_type == "service"  && defined(slug)]`;
export const ALL_TEAM_QUERY = groq`*[_type == "page" && category == "team"]{slug,content[_type == "one-member"]{member->}[0]}`;

export const metaData = `metaData{...,sectionFooter{...,defined(navPage)=>{navPage{page->{slug,language}}}}}`;

export const navPage = `_type == "navPage" =>{...,title,page->{slug}}`;

export const menuLink = `_type == "menuLink" =>{...,title,page->{slug}}`;

export const fullLogo = `*[_type=="generalSettings"][0].logo.fullLogo`;
export const logoMark = `*[_type=="generalSettings"][0].logo.logoMark`;

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
export const languageSupport = `*[_type=="generalSettings"][0].langSupport`;
export const FEATURED_BLOGS = `*[_type=="generalSettings"][0].featuredBlogs[]->{cover,title,tags,slug{current},description}`;
export const featuredCaseStudies = `*[_type=="generalSettings"][0].featuredCaseStudies[]{title,ref->{slug{current}},description,image}`;
export const footerQuery = `*[_type=="footer"][0]{...,footerRoutes[]{...,routes[]{...,${navPage}}},policies[]{...,${navPage}},"langSupport":${languageSupport},"logo":${logoMark}}`;
export const menuQuery = `*[_type=="menu"][0]{...,items[]{...,${navPage},_type == "navDropdown" =>{dropdownItems[]{...,${navPage}}},featured{...,page->}},"logo":${fullLogo}}`;

const page = `
  "type": _type,
  "slug": slug.current,
  "isHome": _id == ${homeID},
  
`;
export const ptContent = `
  ...,
  markDefs[]{
    ...,
    _type == "link" => {
      "url": @.url,
      "isButton": @.isButton,
      "styles": @.styles{style, isLarge, isBlock},
      "page":@.page->{
        ${page}
      }
    }
  }
  
  
`;

// markDefs[]{
//   ...,
//   _type == "link" => {
//     "url": @.url,
//     "isButton": @.isButton,
//     "styles": @.styles{style, isLarge, isBlock},
//     "page":@.page->{
//      slug
//     }
//   }
// }

const gridModule = `{...,columns[]{sizes,blocks[]{...,body[]{
...,
  ${ptContent}
    
  }}}}`;

const cta = `{cta{...,columns[]{...,blocks[]{...,body[]{...,
  markDefs[]{
    ...,
    _type == "link" => {
      "url": @.url,
      "isButton": @.isButton,
      "styles": @.styles{style, isLarge, isBlock},
      "page":@.page->{
        ${page}
      }
    }
  }}}}}}`;

export const modules = `
      ...,
      _type == "menu" => @->{...,items[]{...,${navPage},_type == "navDropdown" =>{dropdownItems[]{...,${menuLink}}},featured{...,page->}},"logo":${fullLogo}},
      _type == "section" => @->{...,${metaData}},
      _type == "mission" => @->,
      _type == "guarantee" => @->{...},
      _type == "gallery" => @->,
      _type == "team" => {...,team[]->{...},${metaData}},
      _type ==  "services" => {...,content[]{...,defined(page) => {page ->{slug}}},${metaData}},
      _type == "testimonial" => @->,
      _type == "blogs" => {...,${metaData},posts[]->{...,cover,title,description,author->{name,photo}}},
      _type == "footer" => @->{...,footerRoutes[]{...,routes[]{...,${navPage}}},policies[]{...,${navPage}},"langSupport":${languageSupport},"logo":${logoMark}},
      _type == "one-member" => {...,member->},
      _type == "awards" => {...,${metaData},content[]->},
      _type == "grid" => ${gridModule},
      _type == "body" => {...,body[]{...,${ptContent},_type == "cta" => @->${cta} }},
      _type == "portfolio" => {...,projects[]{...,page->{slug}},${metaData}},
      _type == "whyChooseUs" => {...},
      _type == "cta" => {...},
      _type == 'hero' => {...,content[]{${ptContent}}}

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
    seo,schemaMarkup}
  `;

// 119

// BLOGS QUERY

export const ALL_POSTS_QUERY = groq`{"posts":*[_type == "post" && language==$lang][$skips...$limit]{...,author->{name,photo}},"featured":${FEATURED_BLOGS}}`;

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

// export const POST_QUERY = `
//         {
//           "page": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc)[0]{
//             "id": _id,
//             hasTransparentHeader,
//             content[]{
//             defined(_ref)=>{...@->content[0]{${modules}}},
//             !defined(_ref)=>{${modules}}
//             },
//             !defined(_ref)=>{
//             ${modules}
//             },
//             title,
//             seo
//           },
//            ${site}
//         }
//         `;

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
            
            title,
            seo
          },
           ${site}
        }
        `;

//189

// export const POST_QUERY = `
//         {
//           "page": *[_type == "post" && slug.current in $slugs] | order(_updatedAt desc)[0]{
//             "id": _id,
//             "footer":${footerQuery},
//             "menu":${menuQuery},
//             hasTransparentHeader,
//             author{name,photo},
//             content[]{
//             defined(_ref)=>{...@->content[0]{${modules}}},
//             !defined(_ref)=>{${modules}}
//             },
//             !defined(_ref)=>{
//             ${modules}
//             },
//             title,
//             seo
//           },
//            ${site}
//         }
//         `;

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

export const SITEMAP_QUERY = `*[_type == "page" && category != "error"]{_updatedAt,slug,"priority":seo.priority}`;
