import { SealCheck } from "@phosphor-icons/react/dist/ssr";
import { defineField } from "sanity";

export default defineField({
  type: "object",
  title: "Services",
  name: "services",
  icon: SealCheck,
  fields: [
    // { type: "sectionID", name: "id" },
    { type: "metaData", name: "metaData" },
    {
      type: "array",
      name: "content",
      title: "Services",
      of: [
        {
          type: "object",
          name: "service",
          title: "Service",
          fields: [
            { type: "string", name: "title", title: "Title Of Service" },
            {
              type: "string",
              name: "subtitle",
              title: "Description Of Service",
            },
            {
              type: "reference",
              name: "page",
              to: [{ type: "page" }],
              options: {
                filter: "category == $type",
                filterParams: { type: "service" },
              },
            },
            {
              type: "customImage",
              name: "icon",
              title: "Icon",
              description:
                "Try to use a lineart with svg for better results. Recommend size 96x96 pixels.",
            },
          ],
        },
      ],

      validation: (Rule: any) =>
        Rule.max(4).error("You can add only 4 services here."),
    },
    {
      type: "customImage",
      name: "lineArt",
      title: "Line Art",
      description: "Try to use a lineart with svg for better results. ",
    },
  ],
  preview: {
    select: {
      content: "content",
    },
    prepare({ content }: any) {
      return {
        title: "Services",
        subtitle: `${content?.length || 0} Services`,
      };
    },
  },
});

/*

    {
      type: "array",
      name: "content",
      title: "Content",
      of: [
        {
          type: "object",
          title: "Service Item",
          name: "item",
          fields: [
            { name: "title", type: "string", title: "Title" },
            {
              type: "reference",
              name: "page",
              to: [{ type: "page" }],
              validation: (Rule: any) => Rule.length(6),
            },
          ],
        },
      ],
    },



*/
