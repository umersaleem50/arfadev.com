import type { Rule } from "sanity";
import { ArrowBendRightDown } from "@phosphor-icons/react";

import { INavLink } from "./navlink";
import { IMenuLink } from "./menuLink";
import { ICustomImage } from "./custom-image";
import { IPage } from "@/sanity/types/globals";

export interface INavDropdown {
  _type?: "navDropdown";
  title: string;
  dropdownItems: (IMenuLink | INavLink)[];
  featured?: {
    title: string;
    cover?: ICustomImage;
    page: IPage;
  };
}

export interface Reference {
  _type: "reference";
  _ref: string;
}

const NavDropdown = {
  title: "Dropdown",
  name: "navDropdown",
  type: "object",
  icon: ArrowBendRightDown,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      description: "Text to Display",
    },
    {
      title: "Dropdown Items",
      name: "dropdownItems",
      type: "array",
      of: [{ type: "menuLink" }, { type: "navLink" }],
    },
    {
      title: "Featured Post",
      name: "featured",
      type: "object",
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title",
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: "cover",
          type: "customImage",
          title: "Cover Image",
          description: "Cover picture will only be used for menu.",
        },
        {
          name: "page",
          type: "reference",
          to: [{ type: "page" }],
          validation: (Rule: Rule) => Rule.required(),
        },
      ],
    },
  ],
};

export default NavDropdown;
