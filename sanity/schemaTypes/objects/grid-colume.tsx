import { getTypeTitles } from "@/sanity/lib/helper";
import { TextAlignLeft } from "@phosphor-icons/react/dist/ssr";
import { Avatar } from "@sanity/ui";
const column = {
  title: "Column",
  name: "gridColumn",
  type: "object",
  icon: TextAlignLeft,
  fields: [
    {
      title: "Column Sizes",
      name: "sizes",
      type: "array",
      of: [{ type: "gridSize" }],
      description:
        "Define the display size of this column for different screen widths",
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      title: "Content Blocks",
      name: "blocks",
      type: "array",
      description: "The content that exists inside this column",
      of: [
        { type: "bodyContent" },
        { type: "customImage" },
        { type: "form" },
        // { type: "productCard" },
      ],
    },
  ],
  preview: {
    select: {
      sizes: "sizes",
      blocks: "blocks",
    },
    prepare({ sizes, blocks }: any) {
      const { width } = sizes?.length ? sizes[0] : 0;
      const types = blocks.map((block: any) => block._type);

      const title = getTypeTitles(types);
      const subtitle = "";

      return {
        title: title || "Block",
        subtitle: subtitle || "",
        media: <Avatar initials={width} size={1} />,
      };
    },
  },
};

export default column;
