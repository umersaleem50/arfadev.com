import { getDynamicRoute, getStaticRoute } from "@/sanity/lib/helper";
import { IReference } from "@/sanity/types/globals";
import { LinkSimpleHorizontal } from "@phosphor-icons/react";

export interface INavPage {
  _type: "navPage";
  _key?: string;
  title?: string;
  page?: IReference;
}

const NavPage = {
  title: "Page",
  name: "navPage",
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

export default NavPage;
