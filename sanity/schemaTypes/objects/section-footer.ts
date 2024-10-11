import { Subtitles } from "@phosphor-icons/react";

export default {
  title: "Section Footer",
  name: "sectionFooter",
  type: "object",
  fields: [
    {
      name: "description",
      title: "Description",
      type: "text",
      row: 2,
      description:
        "Please provide the a brief description, about what a user can expect?",
      validation: (Rule: any) => Rule.required().max(100),
    },
    {
      name: "btnText",
      title: "Button Text",
      type: "string",
    },
    {
      title: "URL Type",
      name: "urlType",
      type: "string",
      options: {
        list: [
          { title: "External URL", value: "external" },
          { title: "Internal Page", value: "internal", default: true },
          {
            title: "Custom Slug",
            value: "slug",
            description:
              "Select this, if your page exist in app but not on cms. ie. Blogs Page.",
          },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "navPage",
      title: "Internal Page",
      rows: 3,
      type: "navPage",
      hidden: ({ parent }: any) => {
        return parent?.urlType !== "internal";
      },
    },
    {
      name: "navLink",
      title: "External Page",
      rows: 3,
      type: "navLink",
      hidden: ({ parent }: any) => {
        return parent?.urlType !== "internal";
      },
    },
    {
      name: "slugPage",
      title: "Slug Page",
      rows: 3,
      type: "string",
      description:
        "Please only provide the full slug of the page ie. /blogs or /dashboard/invoices.",
      hidden: ({ parent }: any) => {
        return parent?.urlType !== "slug";
      },
    },
  ],
  preview: {
    select: {
      title: "heading",
      sub: "paragraph",
    },
    prepare({ title, sub }: any) {
      return {
        title,
        subtitle: sub,
        icon: Subtitles,
      };
    },
  },
};
