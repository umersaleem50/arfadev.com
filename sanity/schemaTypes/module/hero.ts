/* eslint-disable @typescript-eslint/no-explicit-any */
import { Star } from "@phosphor-icons/react/dist/ssr";

const heroSchema = {
  title: "Hero",
  name: "hero",
  type: "object",
  icon: Star,
  fields: [
    // {
    //   title: "Overlay Content",
    //   name: "content",
    //   type: "bodyComplex",
    // },
    { title: "Full Image", name: "isFullImage", type: "boolean" },
    { title: "Dark Text", name: "darkText", type: "boolean" },
    { title: "Content", name: "content", type: "simplePortableText" },
    {
      title: "Background Type",
      name: "bgType",
      type: "string",
      options: {
        list: [
          { title: "Photo", value: "photo" },
          { title: "Video", value: "video" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      // name: "photos",
      // type: "object",
      // fields: [
      //   { name: "mobileImage", type: "customImage" },
      //   { name: "desktopImage", type: "customImage" },
      // ],
      name: "coverImage",
      type: "customImage",
      title: "Cover Image",
      hidden: ({ parent }: any) => {
        return parent.bgType !== "photo";
      },
    },
    {
      name: "video",
      type: "object",
      fields: [
        {
          title: "Background Video",
          name: "id",
          type: "string",
          description:
            "Alternatively, enter a vimeo ID to show a looping video instead",
        },
        {
          title: "Background Video Title",
          name: "title",
          type: "string",
          description: "Short title/description of the video",
        },
      ],
      hidden: ({ parent }: any) => {
        return parent.bgType !== "video";
      },
    },
  ],
  preview: {
    select: {
      photo: "photo",
      content: "content.0.children",
    },
    prepare({ photo, content }: unknown) {
      return {
        title: "Hero",
        subtitle: content && content[0]?.text,
        media: photo,
      };
    },
  },
};

export default heroSchema;
