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
              type: "customImage",
              name: "cover",
              title: "Cover Picture",
              validation(rule) {
                return rule.required();
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
              name: "firmName",
              title: "Firm Name",
              validation(rule) {
                return rule.required();
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
              type: "string",
              name: "results",
              title: "Results",
              description:
                "Speak benefits. ie. 3x growth in traffic in just 3 months.",
              validation(rule) {
                return rule.required();
              },
            },
            {
              name: "project",
              title: "Project",
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
