import { ArrowSquareOut } from "@phosphor-icons/react";
import type { Rule } from "sanity";

export interface INavLink {
  _type: "navLink";
  title: string;
  url: string;
  subtitle?: string;
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
        Rule.custom((value: string) => {
          if (!value) return true;

          // Allow relative URLs
          if (value.startsWith("/")) return true;

          // Allow valid absolute URLs
          const pattern = /^(https?:\/\/|mailto:|tel:)/;
          if (pattern.test(value)) return true;

          return "Enter a valid URL (http, https, mailto, tel) or a relative path starting with /";
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
