import { ArticleNyTimes } from "@phosphor-icons/react/dist/ssr";

import { defineField, defineType, Rule } from "sanity";
export default defineType({
  title: "Post",
  name: "post",
  type: "document",
  icon: ArticleNyTimes,

  groups: [
    { title: "Content", name: "content" },
    { title: "Settings", name: "settings", default: true },
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
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
      group: "settings",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: Rule) => Rule.required().max(400),
      group: "settings",
    },
    {
      name: "cover",
      type: "customImage",
      description: "Cover Picture for article.",
      title: "Cover Image",
      options: {
        collapsible: true,
      },

      validation: (Rule: Rule) => Rule.required(),
      group: "settings",
    },
    {
      title: "Tags",
      name: "tags",
      type: "tags",
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
      title: "Content Body",
      name: "body",
      type: "complexPortableText",
      validation(rule) {
        return rule.required();
      },
      group: "content",
      description: "Here you will add content to your blog.",
    },
    {
      title: "Other Modules",
      name: "content",
      type: "array",
      of: [
        { type: "services", name: "services" },
        { type: "testimonial", name: "testimonial" },
        { type: "all-team", name: "all-team" },
        { type: "all-services", name: "all-services" },
        { type: "process", name: "process" },
        // { type: "contact", name: "contant" },
        { type: "gallery", name: "gallery" },
        { type: "grid", name: "grid" },
        { type: "awards", name: "awards" },
        {
          type: "reference",
          title: "Reusable Section",
          to: [{ type: "section" }],
        },
      ],
      group: "content",
    },
    {
      type: "reference",
      title: "Author",
      name: "author",
      to: [{ type: "member" }],
      validation(rule) {
        return rule.required();
      },
      group: "content",
    },
    {
      type: "array",
      name: "relatedPosts",
      title: "Relative Posts",
      of: [
        {
          type: "reference",
          to: [{ type: "post" }],
        },
      ],
      options: {
        filter: "slug != $slug",
        filterParams: { slug: "slug" },
      },
      group: "settings",
    },

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
    },
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug",
      cover: "cover",
    },
    prepare({
      title = "Untitled",
      slug = {},
      cover,
    }: {
      title: string;
      slug: { current?: string };
      cover: any;
    }) {
      const path = `/${slug?.current}`;
      return {
        title,
        subtitle: slug.current ? path : "(missing slug)",
        media: cover.asset,
      };
    },
  },
});
