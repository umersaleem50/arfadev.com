import { SelectionBackground } from "@phosphor-icons/react/dist/ssr";
import { defineField } from "sanity";

export default defineField({
  title: "CTAs",
  name: "cta",
  type: "document",

  fields: [
    { title: "Title", name: "title", type: "string" },
    { type: "grid", name: "cta", title: "CTA" },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return { title };
    },
  },
  icon: SelectionBackground,
});
