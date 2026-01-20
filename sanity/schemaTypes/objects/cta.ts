import { defineField, Rule } from "sanity";

export default defineField({
  type: "object",
  name: "cta",
  title: "Call To Action",
  fields: [
    {
      title: "Text",
      name: "title",
      type: "string",
      validation: (Rule: Rule) => Rule.required().max(150),
    },
    {
      title: "Text",
      name: "tagline",
      type: "string",
      validation: (Rule: Rule) => Rule.required().max(150),
    },
    { type: "navPage", name: "navPage" },
  ],
});
