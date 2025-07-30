import { ArrowSquareOut } from "@phosphor-icons/react";
import type { Rule } from "sanity";

export interface INavLink {
  _type: "navLink";
  title: string;
  url: string;
}

const NavLink = {
  title: "Link",
  name: "navLink",
  type: "object",
  icon: ArrowSquareOut,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      description: "Display Text",
    },
    {
      title: "URL",
      name: "url",
      type: "string",
      description: "Enter an external URL",
      validation: (Rule: Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
    },
  ],
  preview: {
    select: {
      title: "title",
      url: "url",
    },
    prepare({ title, url }: { title: string; url: string }) {
      return {
        title: title ?? url,
        subtitle: title && url,
      };
    },
  },
};

export default NavLink;
