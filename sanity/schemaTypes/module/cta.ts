import { defineField } from "sanity";

const CTAModule = defineField({
  title: "CTA",
  name: "cta.module",
  type: "object",
  fields: [
    { name: "heading", type: "text" },
    { name: "description", type: "text" },
  ],
});

export default CTAModule;
