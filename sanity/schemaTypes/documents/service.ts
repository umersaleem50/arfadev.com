import { Gavel } from "@phosphor-icons/react";
import { defineType, Rule } from "sanity";
export default defineType({
  title: "Service",
  name: "service",
  type: "document",
  icon: Gavel,
  groups: [
    { title: "Content", name: "content", default: true },
    { title: "Settings", name: "settings" },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
      group: "settings",
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
        { type: "menu", name: "menu" },
        { type: "bodyContent", name: "body" },
        { type: "mission", name: "mission" },
        { type: "hero", name: "hero" },
        {
          type: "reference",
          title: "Reusable Section",
          to: [{ type: "section" }],
        },
      ],
    },
    {
      title: "SEO / Share Settings",
      name: "seo",
      type: "seo",
      group: "settings",
    },
  ],
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
