import { HandCoins } from "@phosphor-icons/react";
import { defineField } from "sanity";

const guarantee = defineField({
  type: "object",
  name: "guarantee",
  title: "Guarantee",
  icon: HandCoins,
  fields: [
    {
      type: "simplePortableText",
      name: "description",
    },
  ],
});

export default guarantee;
