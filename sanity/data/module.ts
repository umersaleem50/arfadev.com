import { cta } from "./cta";
import {
  fullLogo,
  languageSupport,
  logoMark,
  metaData,
  navPage,
  ptContent,
} from "./global";
import { menuLink } from "./navbar";

const gridModule = `{...,columns[]{sizes,blocks[]{...,body[]{
...,
  ${ptContent}
    
  }}}}`;

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
      _type == "blogs" => {...,${metaData},posts[]->{...,cover,cover_vertical,title,description,author->{name,photo}}},
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
