import { File } from "@phosphor-icons/react";

import { defineType, Rule } from "sanity";

export default defineType({
  title: "Case Study",
  name: "portfolio",
  type: "document",
  icon: File,

  groups: [
    { title: "Content", name: "content", default: true },
    { title: "Settings", name: "settings" },
    { title: "SEO", name: "seo" },
  ],
  fields: [
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
      name: "cover",
      type: "sanityImage",
      description: "Cover Picture for portfolio.",
      title: "Cover Image",
      options: {
        collapsible: true,
      },

      validation: (Rule: Rule) => Rule.required(),
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
    prepare({ title = "Untitled", slug = {}, cover }) {
      const path = `/${slug?.current}`;
      return {
        title,
        subtitle: slug.current ? path : "(missing slug)",
        media: cover.image,
      };
    },
  },
});
