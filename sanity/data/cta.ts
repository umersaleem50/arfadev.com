import { page } from "./global";

export const cta = `{cta{...,columns[]{...,blocks[]{...,body[]{...,
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
