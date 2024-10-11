import { Confetti } from "@phosphor-icons/react/dist/ssr";
import { defineField } from "sanity";

export default defineField({
  type: "object",
  name: "portfolio",
  title: "Portfolio",
  icon: Confetti,
  fields: [
    { type: "metaData", title: "Meta Data", name: "metaData" },
    {
      type: "array",
      title: "Projects",
      name: "projects",
      of: [
        {
          type: "object",
          title: "Project",
          fields: [
            {
              type: "array",
              name: "cover",
              title: "Cover Images",
              of: [
                {
                  type: "customImage",
                  name: "cover",
                  title: "Cover Picture",
                  validation(rule) {
                    return rule.required();
                  },
                },
              ],
              validation(rule) {
                return rule.length(2).required();
              },
            },
            {
              type: "string",
              name: "title",
              title: "Title",
              validation(rule) {
                return rule.required();
              },
            },
            {
              type: "string",
              name: "description",
              title: "Description",

              validation(rule) {
                return rule
                  .max(300)
                  .warning("Keep description short. Under 300 Characters.")
                  .required();
              },
            },
            {
              title: "Tags",
              name: "tags",
              type: "tags",
            },
            {
              type: "string",
              name: "duration",
              title: "Project Duration",
              description:
                "Enter the duration in months or weeks for completing the project.",
              validation(rule) {
                return rule.required();
              },
            },
            {
              type: "array",
              name: "results",
              title: "Results",
              description:
                "Speak benefits i.e 3x Growth in first month. The first value will be bold & large.",
              of: [{ type: "string" }],
              validation(rule) {
                return rule.length(2).required();
              },
            },
            {
              name: "page",
              title: "Page URL",
              description: "Select the page associated with this projects.",
              type: "reference",
              to: [{ type: "page" }],
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      projects: "projects",
    },
    prepare({ projects = [] }: any) {
      //   const name = getTypeTitles(columns.map((col) => col.blocks[0]._type));
      return {
        title: `Portfolio`,
        subtitle: `${projects.length} Projects${projects.length > 1 ? "s" : ""}`,
      };
    },
  },
});
