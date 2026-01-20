import { SquareHalfBottom } from "@phosphor-icons/react/dist/ssr";
import { defineField, Rule } from "sanity";

export default defineField({
  type: "document",
  name: "footer",
  title: "Footer",
  icon: SquareHalfBottom,
  fields: [
    {
      type: "boolean",
      title: "Newsletter",
      name: "newsletter",
      description: "Toggle the newsletter option.",
    },
    {
      type: "object",
      name: "metaData",
      title: "Footer Metadata",
      fields: [
        {
          type: "string",
          title: "Title",
          name: "title",
        },
        {
          type: "string",
          title: "Subtitle",
          name: "subtitle",
        },
        { type: "customImage", name: "logo", title: "Logo" },
        {
          type: "array",
          name: "contactDetails",
          of: [{ type: "navLink" }],
          description:
            "Make sure to add title before any value ie. Phone:, Office:",
          title: "Contact Details",
          validation(rule) {
            return rule.required();
          },
        },
      ],
    },
    {
      type: "array",
      name: "footerRoutes",
      validation(rule) {
        return rule.required();
      },
      of: [
        {
          type: "object",
          fields: [
            { type: "string", name: "title" },
            { type: "routes", name: "routes" },
          ],
        },
      ],
    },

    // {
    //   type: "array",
    //   name: "policies",
    //   of: [
    //     {
    //       type: "navLink",
    //     },
    //     { type: "navPage" },
    //   ],
    //   validation(rule) {
    //     return rule.required().max(6);
    //   },
    // },
    {
      type: "array",
      name: "socialLinks",
      title: "Social Links",
      of: [
        {
          type: "object",
          fields: [
            {
              type: "string",
              name: "icon",
              title: "Platform",
              options: {
                list: [
                  { title: "Facebook", value: "facebook" },
                  { title: "Linkedin", value: "linkedin" },
                  { title: "Twitter", value: "twitter" },
                  { title: "slack", value: "slack" },
                  { title: "google", value: "google" },
                ],
              },
            },
            {
              title: "URL",
              type: "string",
              name: "url",
              description: "Enter an external URL",
              validation: (Rule: Rule) =>
                Rule.uri({
                  scheme: ["http", "https", "mailto", "tel"],
                }),
            },
          ],
        },
      ],
      validation(rule) {
        return rule.required();
      },
    },
  ],
  preview: {
    select: {
      metaData: "metaData",
      footerRoutes: "footerRoutes",
    },
    prepare({ metaData = {}, footerRoutes }) {
      return {
        title: metaData.title,
        subtitle: `${footerRoutes?.length || 0} link(s)`,
        media: metaData.logo,
      };
    },
  },
});
