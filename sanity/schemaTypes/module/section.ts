import { ArrowClockwise } from "@phosphor-icons/react/dist/ssr";
import { defineField } from "sanity";

export default {
  title: "Resuable Section",
  name: "section",
  type: "document",
  icon: ArrowClockwise,
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      description:
        "Provide a name to reference this section. For internal use only.",
      validation: (Rule: any) => Rule.required(),
    },
     defineField({
  // should match 'languageField' plugin configuration setting, if customized
  name: 'language',
  type: 'string',
  readOnly: true,
  hidden: true,
}),
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "menu" }],
          name: "menu",
          title: "Menu",
        },
        { type: "mission" },
        { type: "hero" },
        { type: "blogs" },
        { type: "services" },
        { type: "team" },
        { type: "testimonial" },
        { type: "process" },
        {
          type: "reference",
          to: [{ type: "footer" }],
          name: "footer",
          title: "Footer",
        },
        { type: "contact" },
        { type: "gallery" },
        { type: "awards" },
        { type: "portfolio" },
        { type: "whyChooseUs" },
        { type: "grid" },
      ],
      validation: (Rule: any) =>
        Rule.length(1).error("You can only have one piece of content"),
    },
  ],
  preview: {
    select: {
      name: "name",
      content: "content.0",
    },
    prepare({ name, content }: any) {
      return {
        title: name,
        subtle: "Resuable Component",
        // subtitle: getModuleName(content._type),
      };
    },
  },
};
