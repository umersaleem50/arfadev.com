import { Browser } from "@phosphor-icons/react";
import { defineField, defineType, Rule } from "sanity";
export default defineType({
  title: "Page",
  name: "page",
  type: "document",
  icon: Browser,

  groups: [
    { title: "Content", name: "content", default: true },
    { title: "Settings", name: "settings" },
    { title: "SEO", name: "seo" },
  ],
  fields: [
    defineField({
      // should match 'languageField' plugin configuration setting, if customized
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    {
      name: "category",
      type: "string",
      title: "Category",
      description:
        "Please choose where this page belongs. Each category has it's own collection on dashboard.",
      options: {
        list: [
          { title: "Post", value: "post" },
          { title: "Page", value: "page" },
          { title: "Service", value: "service" },
          { title: "Team Page", value: "team" },
          { title: "Other Page", value: "other" },
          { title: "Error Page", value: "error" },
        ],
      },
      validation(rule) {
        return rule.required();
      },
      group: "content",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
      group: "settings",
    },
    {
      title: "Author",
      name: "author",
      type: "reference",
      to: [{ type: "member" }],
      hidden: ({ parent }) => {
        return parent.category !== "post";
      },
    },
    {
      title: "URL Slug",
      name: "slug",
      type: "slug",
      description: "(required)",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required(),
      group: "settings",
    },
    {
      title: "Overlay header with transparency?",
      name: "hasTransparentHeader",
      type: "boolean",
      description:
        "When activated the header will overlay the first content module with a transparent background and white text until scrolling is engaged.",
      initialValue: false,
      group: "settings",
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        { type: "mission", name: "mission" },
        { type: "menu", name: "menu" },
        { type: "bodyContent", name: "body" },
        { type: "hero", name: "hero" },
        { type: "blogs", name: "blogs" },
        { type: "services", name: "services" },
        { type: "all-blogs", name: "all-blogs" },
        { type: "testimonial", name: "testimonial" },
        { type: "all-team", name: "all-team" },
        { type: "all-services", name: "all-services" },
        { type: "landing-hero", name: "landing-hero" },
        { type: "process", name: "process" },
        { type: "footer", name: "footer" },

        { type: "one-member", name: "one-member" },
        { type: "gallery", name: "gallery" },
        { type: "grid", name: "grid" },
        { type: "guarantee", name: "guarantee" },
        { type: "awards", name: "awards" },
        { type: "portfolio", name: "portfolio" },
        { type: "whyChooseUs", name: "whyChooseUs" },
        {
          type: "reference",
          title: "Reusable Section",
          to: [{ type: "section" }],
          options: {
            // Filter sections by the same language as the current document
            filter: ({ document }) => {
              return {
                filter: "language == $language",
                params: { language: document.language },
              };
            },
          },
        },
      ],
      group: "content",
    },
    // {
    //   title: "Page Cover",
    //   name: "pageCover",
    //   type: "customImage",
    //   description: "Use cover on pages like blogs or case study.",
    //   group: "settings",
    // },
    {
      title: "Schema Markup",
      name: "schemaMarkup",
      type: "schemaMarkup",
      group: "seo",
    },

    {
      title: "SEO / Share Settings",
      name: "seo",
      type: "seo",
      group: "seo",
      validation: (Rule: Rule) => Rule.required(),
    },

    // {
    //   title: "Seo",
    //   name: "seo",
    //   type: "seoMetaFields",
    // },
  ],
  initialValue: {
    category: "page",
  },
  preview: {
    select: {
      title: "title",
      slug: "slug",
    },
    prepare({
      title = "Untitled",
      slug = {},
    }: {
      title: string;
      slug: { current?: string };
    }) {
      const path = `/${slug?.current}`;
      return {
        title,
        subtitle: slug.current ? path : "(missing slug)",
      };
    },
  },
});
