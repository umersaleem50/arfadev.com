import { List } from "@phosphor-icons/react/dist/ssr";
import { defineType } from "sanity";

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
    prepare({ title = "Untitled", items = [] }: any) {
      return {
        title,
        subtitle: `${items.length} link(s)`,
        media: List,
      };
    },
  },
});
