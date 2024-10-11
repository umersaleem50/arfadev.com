import { Feather } from "@phosphor-icons/react/dist/ssr";
import { defineField } from "sanity";

export default defineField({
  type: "object",
  name: "whyChooseUs",
  title: "Why Choose Us",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title",
      validation(rule) {
        return rule.required();
      },
    },
    {
      type: "array",
      name: "content",
      title: "Content",
      of: [
        {
          type: "object",
          title: "benefit",
          fields: [
            {
              type: "string",
              name: "title",
              title: "Title",
              validation(rule) {
                return rule.required().max(200);
              },
            },
            {
              type: "text",
              name: "tagline",
              title: "Tag Line",
              rows: 2,
              validation(rule) {
                return rule.required().max(400);
              },
            },
          ],
        },
      ],
    },
  ],
  icon: Feather,
  preview: {
    select: {
      content: "content",
      title: "title",
    },
    prepare({ content = [], title = "" }) {
      return {
        title,
        subtitle: `${content?.length} Benefits`,
      };
    },
  },
});
