import { MicrosoftWordLogo } from "@phosphor-icons/react/dist/ssr";
import { defineField } from "sanity";

export default defineField({
  title: "Featured Blogs",
  name: "blogs",
  type: "object",
  icon: MicrosoftWordLogo,
  fields: [
    { type: "metaData", name: "metaData", title: "Section Details" },
    {
      title: "Blogs",
      type: "array",
      name: "posts",
      of: [
        {
          type: "reference",
          to: [{ type: "post" }],
        },
      ],
      validation: (Rule: any) =>
        Rule.max(2).error("You can only have one piece of content"),
    },
  ],
  preview: {
    prepare() {
      return { title: "Featured Posts" };
    },
  },
});
