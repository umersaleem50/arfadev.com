import { Stack } from "@phosphor-icons/react";

const missionSchema = {
  title: "Misson Section",
  name: "mission",
  type: "object",
  icon: Stack,
  fields: [
    { type: "number", name: "id", title: "ID" },
    { type: "metaData", name: "metaData" },
    {
      name: "content",
      type: "array",
      of: [
        {
          name: "item",
          type: "object",
          fields: [
            {
              type: "customImage",
              name: "image",
            },
            { type: "complexPortableText", name: "body" },
          ],
        },
      ],
    },
  ],
  initialValue: {
    id: Date.now(),
  },
  preview: {
    select: {
      title: "metaData.title",
      sub: "metaData.paragraph",
    },
    prepare({ title, sub }: any) {
      return {
        title,
        subtitle: sub,
      };
    },
  },
};

export default missionSchema;
