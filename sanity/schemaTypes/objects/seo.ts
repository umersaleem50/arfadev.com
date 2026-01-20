import { Rule } from "sanity";

const seo = {
  title: "SEO / Share Settings",
  name: "seo",
  type: "object",
  groups: [
    { title: "On Page", name: "on-page" },
    { title: "SEO Bots", name: "bots" },
  ],
  options: {
    collapsible: true,
  },
  fields: [
    {
      title: "Schema Markup",
      name: "schemaMarkup",
      type: "schemaMarkup",
      group: "on-page",
    },
    {
      title: "Index this page?",
      name: "noindex",
      type: "boolean",
      default: false,
      group: "bots",
    },
    {
      title: "Follow this Page?",
      name: "nofollow",
      type: "boolean",
      default: false,
      group: "bots",
    },
    {
      title: "Cache this Page?",
      name: "cache",
      type: "boolean",
      default: false,
      group: "bots",
    },
    {
      title: "Images index?",
      name: "imageindex",
      type: "boolean",
      default: false,
      group: "bots",
    },
    {
      title: "Change Frequency",
      name: "changeFrequency",
      type: "string",
      description: "How often you believe the content gonna update change?",
      options: {
        list: [
          { title: "Yearly", value: "yearly", default: true },
          { title: "Monthly", value: "monthly" },
          { title: "Weekly", value: "weekly" },
        ],
      },
      group: "on-page",
    },
    {
      title: "Priority",
      name: "priority",
      type: "number",
      description:
        "Enter the prority no. 1 means highest priority 0 means lowest priority.",
      validation: (Rule: Rule) => Rule.required().max(1).min(0).positive(),
      initial: 0.5,
      group: "on-page",
    },
    {
      title: "kewords",
      name: "keywords",
      type: "array",
      of: [{ type: "string" }],
      group: "on-page",
    },
    {
      title: "Meta Title",
      name: "metaTitle",
      type: "string",
      description: "Title used for search engines and browsers",
      validation: (Rule: Rule) =>
        Rule.required()
          .max(50)
          .warning("Longer titles may be truncated by search engines"),
      group: "on-page",
    },
    {
      title: "Authors",
      name: "authors",
      type: "array",
      of: [
        // { type: "reference", to: [{ type: "member" }] },
        {
          type: "object",
          fields: [
            { type: "string", title: "Author Name", name: "name" },
            { type: "string", title: "Webpage URL", name: "url" },
          ],
        },
      ],
      group: "on-page",
    },
    { title: "Creator", name: "creator", type: "string", group: "on-page" },
    { title: "Publisher", name: "publisher", type: "string", group: "on-page" },

    {
      title: "Meta Description",
      name: "metaDesc",
      type: "text",
      rows: 3,
      description: "Description for search engines",
      validation: (Rule: Rule) =>
        Rule.required()
          .max(150)
          .warning("Longer descriptions may be truncated by search engines"),
      group: "on-page",
    },
    {
      title: "Share Title",
      name: "shareTitle",
      type: "string",
      description: "Title used for social sharing cards",
      validation: (Rule: Rule) =>
        Rule.max(50).warning("Longer titles may be truncated by social sites"),
      group: "on-page",
    },
    {
      title: "Share Description",
      name: "shareDesc",
      type: "text",
      rows: 3,
      description: "Description used for social sharing cards",
      validation: (Rule: Rule) =>
        Rule.max(150).warning(
          "Longer descriptions may be truncated by social sites",
        ),
      group: "on-page",
    },
    {
      title: "Share Graphic",
      name: "shareGraphic",
      type: "image",
      description: "Recommended size: 1200x630 (PNG or JPG)",
      group: "on-page",
    },
  ],
};

export default seo;
