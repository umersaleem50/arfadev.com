import { Textbox } from "@phosphor-icons/react/dist/ssr";
import { defineField } from "sanity";

export default defineField({
  type: "object",
  name: "input",
  title: "Input",
  fields: [
    { name: "label", title: "Label", type: "string" },
    {
      name: "type",
      title: "Input Type",
      type: "string",
      options: {
        list: [
          { title: "Textbox", value: "text" },
          { title: "Email", value: "email" },
          { title: "Phone", value: "tel" },
          { title: "Password", value: "password" },
          { title: "Textarea", value: "textarea" },
          { title: "Submit", value: "submit" },
        ],
      },
    },
    { type: "string", title: "Placeholder", name: "placeholder" },
    { name: "required", title: "Required", type: "boolean" },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "defaultText",
      title: "Default Value",
      type: "string",
      hidden: ({ parent }: any) => {
        return parent.type !== "text" || parent.type !== "textarea";
      },
    },
  ],
  initialValue: {
    wide: true,
  },
  icon: Textbox,
  preview: {
    select: { label: "label", type: "type" },
    prepare({ label, type }: any) {
      return { title: label, subtitle: type };
    },
  },
});
