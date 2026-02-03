import { Browser } from "@phosphor-icons/react";
import { defineField } from "sanity";

export default defineField({
  title: "Landing Page Hero",
  name: "landing-hero",
  type: "object",
  icon: Browser,
  fields: [
    { title: "isEnable", name: "enable", type: "boolean", hidden: true },
  ],

  preview: {
    prepare() {
      return { title: "Homepage Hero Section" };
    },
  },
});
