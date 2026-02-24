import { Images } from "@phosphor-icons/react/dist/ssr";
import { defineField } from "sanity";

export default defineField({
  type: "object",
  name: "gallery",
  title: "Gallery",
  icon: Images,
  fields: [
    {
      type: "boolean",
      name: "wide",
      title: "Wide Content",
      description: "If toggled it will make your content 100% wide of device.",
    },
    {
      type: "array",
      name: "content",
      title: "Content",
      of: [{ type: "sanityImage" }],
      validation(rule) {
        return rule.required().max(30);
      },
    },
  ],
  preview: {
    select: {
      items: "content",
    },
    prepare(value) {
      return {
        title: "Gallery",
        subtitle: (value?.items?.length || 0) + " items",
      };
    },
  },
});
