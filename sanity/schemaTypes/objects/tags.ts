import { defineField } from "sanity";

export default defineField({
  title: "Tags",
  name: "tags",
  type: "array",
  of: [{ type: "category", name: "tag", title: "Tag" }],
  validation: (Rule: any) => Rule.max(6),
});
