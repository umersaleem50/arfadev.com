import { Question } from "@phosphor-icons/react/dist/ssr";
import { defineField, UserAvatar } from "sanity";

export default defineField({
  title: "Column Size",
  name: "gridSize",
  type: "object",
  fieldsets: [
    {
      title: "Columes",
      name: "sizes",
      options: { columns: 2 },
    },
  ],
  fields: [
    {
      title: "Breakpoint",
      name: "breakpoint",
      type: "string",
      description: "Control what screen width this is for",
      options: {
        list: [
          { title: "Default", value: " " },
          { title: "XS (480px and up)", value: "xs" },
          { title: "SM (768px and up)", value: "sm" },
          { title: "MD (940px and up)", value: "md" },
          { title: "LG (1200px and up)", value: "lg" },
          { title: "XL (1600px and up)", value: "xl" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
      fieldset: "sizes",
    },
    {
      title: "Width",
      name: "width",
      type: "number",
      description: "Set how many grid spaces this occupies",
      options: {
        list: [
          { title: "1", value: 1 },
          { title: "2", value: 2 },
          { title: "3", value: 3 },
          { title: "4", value: 4 },
          { title: "5", value: 5 },
          { title: "6", value: 6 },
          { title: "7", value: 7 },
          { title: "8", value: 8 },
          { title: "9", value: 9 },
          { title: "10", value: 10 },
          { title: "11", value: 11 },
          { title: "12", value: 12 },
        ],
      },
      validation: (Rule: any) => Rule.required(),
      fieldset: "sizes",
    },
    {
      title: "Justify",
      name: "justify",
      type: "string",
      description: "Control the X-axis positioning",
      options: {
        list: [
          { title: "Left", value: "justify-self-start" },
          { title: "Center", value: "justify-self-center" },
          { title: "Right", value: "justify-self-end" },
        ],
      },
      fieldset: "sizes",
    },
    {
      title: "Align",
      name: "align",
      type: "string",
      description: "Control the Y-axis positioning",
      options: {
        list: [
          { title: "Top", value: "self-start" },
          { title: "Middle", value: "self-center" },
          { title: "Bottom", value: "self-end" },
        ],
      },
      fieldset: "sizes",
    },
    {
      title: "Start (offset)",
      name: "start",
      type: "number",
      description: "Set the grid space this starts in",
      options: {
        list: [
          { title: "1", value: 1 },
          { title: "2", value: 2 },
          { title: "3", value: 3 },
          { title: "4", value: 4 },
          { title: "5", value: 5 },
          { title: "6", value: 6 },
          { title: "7", value: 7 },
          { title: "8", value: 8 },
          { title: "9", value: 9 },
          { title: "10", value: 10 },
          { title: "11", value: 11 },
          { title: "12", value: 12 },
        ],
      },
      fieldset: "sizes",
    },
  ],
  preview: {
    select: {
      breakpoint: "breakpoint",
      width: "width",
      start: "start",
    },
    prepare({ breakpoint, width, start }: any) {
      return {
        title: `Width: ${width}`,
        subtitle: start ? `Offset: ${start}` : "",
        // media: (
        //   <UserAvatar
        //     initials={breakpoint && breakpoint.trim() ? breakpoint : "D"}
        //     size={1}
        //   />
        // ),
      };
    },
  },
});
