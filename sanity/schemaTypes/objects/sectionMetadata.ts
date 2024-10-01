import { Subtitles } from "@phosphor-icons/react";

export default {
  title: "Section Metadata",
  name: "metaData",
  type: "object",
  fields: [
    {
      name: "miniTitle",
      title: "Mini Title",
      type: "string",
      description: "Optional! Keep it short.",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required().max(100),
    },
    {
      name: "subtitle",
      title: "Subtitle",
      rows: 3,
      type: "text",
      validation: (Rule: any) => Rule.max(200).warning("Keep subtitle short."),
    },
    {
      name: "mainLink",
      title: "Main Link",
      type: "navPage",
      description: "Select the page that have all the data of specific block.",
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
