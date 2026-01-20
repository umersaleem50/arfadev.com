import { List } from "@phosphor-icons/react/dist/ssr";
import { defineField, defineType } from "sanity";
import { INavDropdown } from "../objects/nav-dropdown";
import { INavLink } from "../objects/navlink";
import { INavPage } from "../objects/navpage";

export interface IMenu {
  _id: string;
  _type: "menu";
  title: string;
  language?: string;
  items?: Array<INavPage | INavLink | INavDropdown>;
}

export default defineType({
  title: "Menu",
  name: "menu",
  type: "document",
  icon: List,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    defineField({
      // should match 'languageField' plugin configuration setting, if customized
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    // {
    //   title: "Slug",
    //   name: "slug",
    //   type: "slug",
    //   description: "required",
    //   options: {
    //     source: "title",
    //     maxLength: 30,
    //   },
    // },
    {
      title: "Nav Items",
      name: "items",
      type: "array",
      of: [{ type: "navPage" }, { type: "navLink" }, { type: "navDropdown" }],
      // { type: "navLink" }, { type: "navDropdown" }
    },
  ],
  preview: {
    select: {
      title: "title",
      items: "items",
    },
    prepare({
      title = "Untitled",
      items = [],
    }: Pick<IMenu, "title" | "items">) {
      return {
        title,
        subtitle: `${items.length} link(s)`,
        media: List,
      };
    },
  },
});
