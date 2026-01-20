import { ArrayRule, defineField } from "sanity";

export default defineField({
  title: "Tags",
  name: "tags",
  type: "array",
  of: [{ type: "category", name: "tag", title: "Tag" }],
  validation: (Rule: ArrayRule<unknown>) => Rule.max(6),
});
