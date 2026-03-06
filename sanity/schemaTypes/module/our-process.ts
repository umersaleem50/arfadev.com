import { ChartBar } from "@phosphor-icons/react/dist/ssr";
import { defineField } from "sanity";

export default defineField({
  type: "object",
  name: "process",
  title: "Our Process",
  icon: ChartBar,
  fields: [
    {
      type: "metaData",
      name: "metaData",
      title: "Meta Data",
    },
  ],
});
