import { HandPeace } from "@phosphor-icons/react/dist/ssr";
import { defineField } from "sanity";

export default defineField({
  type: "object",
  name: "testimonial",
  title: "Testimonial",
  fields: [
    { name: "metaData", type: "metaData" },

    {
      type: "array",
      name: "clients",
      of: [
        {
          type: "object",
          name: "client",
          fields: [
            {
              type: "string",
              name: "author",
              title: "Client's Name",
              validation(rule) {
                return rule.required().max(40);
              },
            },
            {
              type: "string",
              name: "role",
              title: "Client's Role",
              validation(rule) {
                return rule.required().max(150);
              },
            },
            {
              type: "sanityImage",
              name: "image",
              title: "Client's Profile Picture",
            },
            {
              type: "text",
              name: "qoute",
              title: "Qoute",
              rows: 3,
              description: "Enter the qoute by the client.",
              validation(rule) {
                return rule.required().max(600).error("Keep it short.");
              },
            },
          ],
        },
      ],
    },
  ],
  initialValue: () => ({
    wide: true,
  }),
  icon: HandPeace,
});
