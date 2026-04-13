import {
  errorID,
  fullLogo,
  languageSupport,
  logoMark,
  navPage,
} from "./global";
import { menuLink } from "./navbar";

export const NOT_FOUND = `
    *[_type == "page" && _id == ${errorID}] | order(_updatedAt desc)[0]{
      "id": _id,
      hasTransparentHeader,
      content[]{
        defined(_ref) => { ...@->content[0] {
           _type == "menu" => @->{...,items[]{...,${navPage},_type == "navDropdown" =>{dropdownItems[]{...,${menuLink}}},featured{...,page->}},"logo":${fullLogo}},
           _type == "footer" => @->{...,footerRoutes[]{...,routes[]{...,${navPage}}},policies[]{...,${navPage}},"langSupport":${languageSupport},"logo":${logoMark}}
        }},
        !defined(_ref) => {
         _type == "menu" => @->{...,items[]{...,${navPage},_type == "navDropdown" =>{dropdownItems[]{...,${menuLink}}},featured{...,page->}},"logo":${fullLogo}},
           _type == "footer" => @->{...,footerRoutes[]{...,routes[]{...,${navPage}}},policies[]{...,${navPage}},"langSupport":${languageSupport},"logo":${logoMark}}
        }
      },
      title,
      seo
    }
  `;
