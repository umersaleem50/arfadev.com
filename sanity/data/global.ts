export const metaData = `metaData{...,sectionFooter{...,defined(navPage)=>{navPage{page->{slug,language}}}}}`;

export const site = `
  "site": {
           "title": *[_type == "generalSettings"][0].siteTitle,
             "rootDomain": *[_type == "generalSettings"][0].siteURL
           },`;

export const homeID = `*[_type=="generalSettings"][0].home->_id`;
export const errorID = `*[_type=="generalSettings"][0].error->_id`;

export const navPage = `_type == "navPage" =>{...,title,page->{slug}}`;

export const fullLogo = `*[_type=="generalSettings"][0].logo.fullLogo`;
export const logoMark = `*[_type=="generalSettings"][0].logo.logoMark`;

export const languageSupport = `*[_type=="generalSettings"][0].langSupport`;

export const page = `
  "type": _type,
  "slug": slug.current,
  "isHome": _id == ${homeID},
`;

export const ptContent = `
  ...,
  markDefs[]{
    ...,
    _type == "link" => {
  "url": url,
  "isButton": isButton,
  "styles": styles{style, isLarge, isBlock},
  "page": @.page->{
    title,
    "slug": slug.current
    }
    }
  }
`;

export const featuredCaseStudies = `*[_type=="generalSettings"][0].featuredCaseStudies[]{title,ref->{slug{current}},description,image}`;
