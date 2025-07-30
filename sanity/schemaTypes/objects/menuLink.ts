import { getDynamicRoute, getStaticRoute } from "@/sanity/lib/helper";
import { IPage } from "@/sanity/types/globals";
import { LinkSimpleHorizontal } from "@phosphor-icons/react";

export interface IMenuLink {
  _type: "menuLink";
  _key?: string;
  title: string;
  subtitle?: string;
  page?: IPage;
}

const MenuLink = {
  title: "Menu Link",
  name: "menuLink",
  type: "object",
  icon: LinkSimpleHorizontal,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      description: "Display Text",
    },
    {
      title: "Subtitle",
      name: "subtitle",
      type: "string",
      description:
        "Brief detail of the link. ie incase of service give details about service you're providing",
    },
    {
      title: "Page",
      name: "page",
      type: "reference",
      to: [{ type: "page" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      pageType: "page._type",
      pageSlug: "page.slug.current",
    },
    prepare({
      title,
      pageType,
      pageSlug,
    }: {
      title: string;
      pageType: string;
      pageSlug: string;
    }) {
      const isStatic = getStaticRoute(pageType);
      const isDynamic = getDynamicRoute(pageType);

      return {
        title: title,
        subtitle:
          isStatic !== false
            ? `/${isStatic}`
            : `/${isDynamic ? `${isDynamic}/` : ""}${pageSlug}`,
      };
    },
  },
};

export default MenuLink;
