import { UserCirclePlus } from "@phosphor-icons/react/dist/ssr";
import { defineField, Rule } from "sanity";

export default defineField({
  title: "Featured Members",
  name: "team",
  type: "object",
  icon: UserCirclePlus,
  fields: [
    { type: "metaData", name: "metaData" },
    {
      title: "Team Members",
      type: "array",
      name: "team",
      of: [
        {
          type: "reference",
          to: [{ type: "member" }],
          options: {
            filter: "category == $type",
            filterParams: { type: "team" },
          },
        },
      ],
      validation: (Rule: Rule) =>
        Rule.max(6).error(
          "You can only have max of six members on this block.",
        ),
    },
  ],
  preview: {
    select: {
      items: "team",
    },
    prepare({ items }: any) {
      return {
        title: "Featured Team",
        subtitle: `${items?.length || 0} Members`,
      };
    },
  },
});
